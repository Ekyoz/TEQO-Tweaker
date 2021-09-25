import json
from scripts.SerialListener import slide1
import warnings
import SerialListener

json = "bindings.json"
current_profile = "default"

with open(json, "r") as f:
    file = json.load(f)
    current_profile = file["current"]

    if not current_profile in file["profiles"]:
        current_profile = "default"


def getBind(btn):
    with open(json, "r") as f:
        file = json.load(f)
        return file["profiles"][current_profile]["bindings"][btn]

while True:
    if SerialListener.isSlidesChanging():
        print(getBind(SerialListener.isSlidesChanging))
