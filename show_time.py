#!/usr/bin/env python

import asyncio
import datetime
import json
import websockets
import Adafruit_DHT

DHT_SENSOR = Adafruit_DHT.DHT22
DHT_PIN = 4

async def show_time(websocket):
    while True:
        time = datetime.datetime.utcnow().isoformat()
        humidity, temperature = Adafruit_DHT.read(DHT_SENSOR, DHT_PIN)
        temp = "{:.1f}".format(temperature)
        humid = "{:.1f}".format(humidity)
        await websocket.send(json.dumps({"time":time,"temp":temp,"humid":humid}))
        await asyncio.sleep(1)

async def main():
    async with websockets.serve(show_time, "192.168.0.123", 5678):
        await asyncio.Future()  # run forever

if __name__ == "__main__":
    asyncio.run(main())