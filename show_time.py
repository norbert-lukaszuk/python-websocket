#!/usr/bin/env python

import asyncio
import datetime
import random
import websockets

async def show_time(websocket):
    while True:
        message = datetime.datetime.utcnow().isoformat()
        
        await websocket.send(message)
        await asyncio.sleep(1)

async def main():
    async with websockets.serve(show_time, "localhost", 5678):
        await asyncio.Future()  # run forever

if __name__ == "__main__":
    asyncio.run(main())