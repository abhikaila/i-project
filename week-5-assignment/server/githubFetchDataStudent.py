import sys
from github import Github
from gh import *
import json
try:

    # Enter your username and password of github
    g = Github(username, password)
    user = g.get_user()

    # Create a repo wherer you want to save data
    # and create two files
    # 1. studentData.json
    # 2. teacherData.json
    # Enter path to your repository where this files are created
    repo = g.get_repo("abhikaila/i-project-data")
    
    studentFile = repo.get_contents("studentData.json")
    studentData = studentFile.decoded_content.decode('UTF-8')
    
    print(studentData)
except:
    print("0")
