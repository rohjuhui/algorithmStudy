import git
import time
import sys
import os

if __name__ == "__main__":
    # PATH_TARGET = sys.argv[1]
    os.chdir("..")

    PATH_TARGET = "algorithmStudy"

    repo = git.Repo(PATH_TARGET)
    repo.remotes.origin.pull()

    for file in repo.untracked_files:
        fileNum = file.split("/")[-1].split("_")[0]
        repo.git.add(file)
        repo.index.commit(f"feat: {fileNum}번 문제 해결")
        time.sleep(1)