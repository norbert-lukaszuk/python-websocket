#!/usr/bin/env python

import asyncio
import datetime
import random
import websockets
import Adafruit_DHT

DHT_SENSOR = Adafruit_DHT.DHT11
DHT_PIN = 4

async def show_time(websocket):
    while True:
        message = datetime.datetime.utcnow().isoformat()
        humidity, temperature = Adafruit_DHT.read(DHT_SENSOR, DHT_PIN)
        msg = "Temp:{0:0.1f} humid:{0:0.1f}".format(temperature,humidity)
        print(msg)
        await websocket.send(msg)
        await asyncio.sleep(1)

async def main():
    async with websockets.serve(show_time, "192.168.0.123", 5678):
        await asyncio.Future()  # run forever

if __name__ == "__main__":
    asyncio.run(main())