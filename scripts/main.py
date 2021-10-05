from changeVolume import *
from SerialListener import *
from getJson import getAction
from scripts.Actions import volume_app

if __name__ == "__main__":
    while True:
        if slide() != ValActPot1:
            volume_app("spotify.exe")

        if slide1() != ValActPot2:
            if action("pot2") == "None" or "master" or "process":
                if action("pot2") == "master":
                    changeMasterVolume(pot2())
                if action("pot2") == "process":
                    changeProcessVolume(pot2(), "pot2")
            elif action("pot2") != "None" or "master" or "process":
                print("Error in settings.json!")


        if slide2() != ValActPot3:
            if action("pot3") == "None" or "master" or "process":
                if action("pot3") == "master":
                    changeMasterVolume(pot3())
                if action("pot3") == "process":
                    changeProcessVolume(pot3(), "pot3")
            elif action("pot3") != "None" or "master" or "process":
                print("Error in settings.json!")


        if slide3() != ValActPot4:
            if action("pot4") == "None" or "master" or "process":
                if action("pot4") == "master":
                    changeMasterVolume(pot4())
                if action("pot4") == "process":
                    changeProcessVolume(pot4(), "pot4")
            elif action("pot4") != "None" or "master" or "process":
                print("Error in settings.json!")

