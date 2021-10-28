import changeVolume

def volume_app(lvl: int, app: str):
    audioController = changeVolume.AudioController(app)
    audioController.set_volume(int(lvl) / 100)

def volume_master(lvl: int):
    audioController = changeVolume.AudioController(None)
    audioController.master(int(lvl) / 100)

