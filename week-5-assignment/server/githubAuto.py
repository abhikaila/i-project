import sys
from github import Github
import json
try:

    # Enter your username and password of github
    g = Github("username", "password")
    user = g.get_user()

    # Create a repo wherer you want to save data
    # and create two files
    # 1. studentData.json
    # 2. teacherData.json
    # Enter path to your repository where this files are created
    repo = g.get_repo("username/repo-name")
    
    studentFile = repo.get_contents("studentData.json")
    teacherFile = repo.get_contents("teacherData.json")
    
    # get the student and teacher data
    sData = sys.argv[1]
    tData = sys.argv[2]
    
    # update a file content
    repo.update_file("studentData.json","initial commit1",sData,studentFile.sha)
    repo.update_file("teacherData.json","initial commit1",tData,teacherFile.sha)

    # print 1 if file updated sucesfully
    print("1")
except:
    print("0")
