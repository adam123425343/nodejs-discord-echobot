const Discord = require('discord.js'); //import client from discord
const keep_alive = require(' ./keep_alive.js')
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    // check if message isn't from us
    if (msg.author == client.user) {
      return;
    }
    else if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
    else {
        msg.reply(msg.content);
      import os
import discord
import random
from discord.ext import commands
import time

#intentz
intents = discord.Intents.all()
bot = commands.Bot(command_prefix='?', intents=intents)

@bot.event 
async def on_ready():
  print('welcome')



#mines
@bot.command()
async def mines(ctx, roundid):
    a = len(roundid)
    if a == 36:

      await ctx.reply(f'Checking {roundid}')


      await anu(ctx, roundid)
    else:
      time.sleep(2)
      await ctx.reply('Wrong Round Id')
async def anu(ctx, roundid):
  an = []
  an.clear()
  for i in range(5):
    seq =  ["💣", "💣", "💣", "💣", "💣"]
    a = random.randrange(0, len(seq))
    seq[a] = "💎" 
    an.append(" ".join(seq))
  embed=discord.Embed(title="made by J_39102", description=f"")
  embed.add_field(name="mines made by J_39102", value="\n".join(an), inline=False)
  acc = str(random.randint(96, 97))
  cashout = str(random.randint(1, 3))
  embed.add_field(name="Accuracy", value=f"{acc}%")
  embed.add_field(name="Safe Cash out", value=f"{cashout} Tiles")
  await ctx.reply(ctx.author.mention, embed=embed)
    }
});

client.login(process.env.Token); //login bot using token
