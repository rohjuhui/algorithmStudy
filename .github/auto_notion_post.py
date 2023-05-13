from glob import glob
from os import getenv
from re import findall
from requests import get
from datetime import date
from urllib.parse import quote
from notion_client import Client

commit_message = getenv("COMMIT_MESSAGE")
problem_num = findall(r"\d+", commit_message)[0]

response = get(
    f"https://solved.ac/api/v3/problem/show?problemId={problem_num}", headers={"Accept": "application/json"}
)

repo = getenv("GITHUB_REPOSITORY")
branch = getenv("GITHUB_REF").split("/")[-1]

filename = quote(glob(f"**/{problem_num}_*.js", recursive=True)[0])

json_data = response.json()

algos = []
for tag in json_data.get("tags"):
    for tag_info in tag.get("displayNames"):
        if tag_info.get("language") == "ko":
            algos.append({"name": tag_info.get("name")})

cores = ["브론즈", "실버", "골드", "플레티넘", "다이아몬드", "루비"]
levels = [1, 5, 4, 3, 2]
N = json_data.get("level")
core = cores[(N - 1) // 5]
level = levels[N % 5]

title = f"{problem_num}_{json_data['titleKo']}"

now_date = date.today().strftime("%Y-%m-%d")

notion = Client(auth=getenv("NOTION_TOKEN"))
database_id = getenv("DATABASE_ID")

new_record = {
    "상태": {"type": "select", "select": {"name": "해결"}},
    "문제 링크": {"type": "url", "url": f"https://www.acmicpc.net/problem/{problem_num}"},
    "단계": {"type": "multi_select", "multi_select": [{"name": f"{core} {level}"}]},
    "날짜": {"type": "date", "date": {"start": now_date, "end": None, "time_zone": None}},
    "깃헙 링크": {"type": "url", "url": f"https://github.com/{repo}/blob/{branch}/{filename}"},
    "사람": {"type": "people", "people": [{"object": "user", "id": getenv("NOTION_SELF_ID")}]},
    "출처": {"type": "multi_select", "multi_select": [{"name": "백준"}]},
    "알고리즘 분류": {"type": "multi_select", "multi_select": algos},
    "문제명": {
        "id": "title",
        "type": "title",
        "title": [
            {
                "type": "text",
                "text": {"content": title, "link": None},
                "plain_text": title,
            }
        ],
    },
}

notion.pages.create(parent={"database_id": database_id}, properties=new_record)
