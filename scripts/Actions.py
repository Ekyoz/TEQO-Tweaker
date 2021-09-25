import changeVolume
import base64
import requests

def volume_app(lvl: int, app: str):
    changeVolume.changeProcessVolume(lvl, app)

def volume_master(lvl: int):
    changeVolume.changeMasterVolume(lvl)


