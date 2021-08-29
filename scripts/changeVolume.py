import json
from pycaw.pycaw import AudioUtilities
from ctypes import POINTER, cast
from comtypes import CLSCTX_ALL
from pycaw.pycaw import AudioUtilities, IAudioEndpointVolume

access = "settings.json"


def App(pot):        
    with open(access, "r") as f:
        file = json.load(f)
    return file["potentiometer"][pot]["app"]

def changeMasterVolume(lvl):
    devices = AudioUtilities.GetSpeakers()
    interface = devices.Activate(
    IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
    volume = cast(interface, POINTER(IAudioEndpointVolume))
    volume.SetMasterVolumeLevelScalar(lvl, None)

def changeProcessVolume(lvl, app):
    sessions = AudioUtilities.GetAllSessions()
    for session in sessions:
        volume = session.SimpleAudioVolume
        if session.Process and session.Process.name() == App(app):
            volume.SetMasterVolume(lvl , None)