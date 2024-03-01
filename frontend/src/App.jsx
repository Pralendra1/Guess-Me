import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Guesser from "./components/Guesser";

function App() {
  const characters = [
    {
      name: "Monkey D. Luffy",
      tags: [
        "pirate",
        "straw hat",
        "rubber",
        "Gomu Gomu no Mi",
        "captain",
        "Monkey D. Dragon's son",
      ],
    },
    {
      name: "Roronoa Zoro",
      tags: [
        "swordsman",
        "santoryu",
        "Wado Ichimonji",
        "katana",
        "bounty hunter",
      ],
    },
    {
      name: "Nami",
      tags: [
        "navigator",
        "thief",
        "climatologist",
        "tangerine trees",
        "treasure map",
        "Cat Burglar",
      ],
    },
    {
      name: "Usopp",
      tags: ["sniper", "liar", "sogeking", "sharpshooter", "inventor"],
    },
    {
      name: "Sanji",
      tags: [
        "cook",
        "blackleg",
        "diablo jambe",
        "mr. prince",
        "women",
        "Mr. Blue Foot",
      ],
    },
    {
      name: "Tony Tony Chopper",
      tags: [
        "doctor",
        "reindeer",
        "Zoan",
        "cotton candy lover",
        "Kung Fu Point",
        "Monster Point",
      ],
    },
    {
      name: "Nico Robin",
      tags: [
        "archaeologist",
        "devil fruit",
        "ohara",
        "poneglyphs",
        "hundred flowers",
        "Flower-Flower Fruit",
      ],
    },
    {
      name: "Franky",
      tags: [
        "shipwright",
        "cyborg",
        "super",
        "battle franky",
        "pervert",
        "Cola Powered",
      ],
    },
    {
      name: "Brook",
      tags: [
        "musician",
        "soul king",
        "yomi yomi",
        "skeleton",
        "alive",
        "Soul Solid",
      ],
    },
    {
      name: "Jinbe",
      tags: [
        "fishman",
        "helmsman",
        "karate",
        "sun pirate",
        "warlord",
        "Knight of the Sea",
      ],
    },
    {
      name: "Vinsmoke Sanji",
      tags: [
        "cook",
        "blackleg",
        "germa 66",
        "smoke",
        "assassin",
        "Prince of Germa",
      ],
    },
    {
      name: "Portgas D. Ace",
      tags: [
        "fire fist",
        "whitebeard",
        "captain",
        "spade pirates",
        "Flame-Flame Fruit",
        "brother of Luffy",
      ],
    },
    {
      name: "Trafalgar D. Water Law",
      tags: [
        "surgeon of death",
        "heart pirates",
        "shichibukai",
        "swordsman",
        "room",
        "Death Surgeon",
      ],
    },
    {
      name: "Charlotte Katakuri",
      tags: [
        "sweet commander",
        "mochi",
        "big mom",
        "strongest",
        "future sight",
        "Mochi-Mochi Fruit",
      ],
    },
    {
      name: "Nico Olvia",
      tags: [
        "archaeologist",
        "Ohara",
        "mother of Robin",
        "telling the Void Century",
      ],
    },
    {
      name: "Silvers Rayleigh",
      tags: ["dark king", "right hand", "roger pirates", "haki", "first mate"],
    },
    {
      name: "Shanks",
      tags: [
        "red hair",
        "emperor",
        "four emperors",
        "yami yami",
        "duel",
        "captain of red-haired pirates",
      ],
    },
    {
      name: "Boa Hancock",
      tags: [
        "pirate empress",
        "snake princess",
        "love-love",
        "amazon lily",
        "warlord",
        "Kuja Pirates",
      ],
    },
    {
      name: "Blackbeard",
      tags: [
        "yami yami",
        "gura gura",
        "emperor",
        "blackbeard pirates",
        "warlord",
        "The Strongest",
      ],
    },
    {
      name: "Dracule Mihawk",
      tags: [
        "world's greatest swordsman",
        "shichibukai",
        "black sword",
        "hawk eyes",
        "Kokutou Yoru",
      ],
    },
    {
      name: "Trafalgar Law",
      tags: [
        "surgeon of death",
        "heart pirates",
        "shichibukai",
        "swordsman",
        "room",
        "Death Surgeon",
      ],
    },
    {
      name: "Kaido",
      tags: [
        "hundred beasts",
        "emperor",
        "beast pirates",
        "dragon",
        "roar of the sea",
        "Strongest Creature in the World",
      ],
    },
    {
      name: "Big Mom",
      tags: [
        "emperor",
        "whole cake",
        "charlotte family",
        "soul soul",
        "pirate",
        "Zeus",
      ],
    },
    {
      name: "Edward Newgate",
      tags: [
        "whitebeard",
        "emperor",
        "strongest man",
        "new world",
        "quake",
        "Gura Gura no Mi",
      ],
    },
    {
      name: "Gol D. Roger",
      tags: [
        "pirate king",
        "one piece",
        "roger pirates",
        "conqueror's haki",
        "execution",
        "The King of Pirates",
      ],
    },
    {
      name: "Buggy",
      tags: [
        "clown",
        "roger pirate",
        "shichibukai",
        "buggy ball",
        "devil fruit",
        "Chop-Chop Fruit",
      ],
    },
    {
      name: "Emporio Ivankov",
      tags: [
        "revolutionary",
        "okama",
        "miracle person",
        "queen",
        "empress",
        "Emporio Hormone",
      ],
    },
    {
      name: "Doflamingo",
      tags: [
        "heavenly demon",
        "shichibukai",
        "donquixote",
        "smile",
        "bird cage",
        "String-String Fruit",
      ],
    },
    {
      name: "Bartolomeo",
      tags: [
        "cannibal",
        "straw hat grand fleet",
        "barrier",
        "Barto Club",
        "fanboy",
        "Bari Bari no Mi",
      ],
    },
    {
      name: "Katakuri",
      tags: [
        "sweet commander",
        "mochi mochi",
        "bounty",
        "big mom",
        "fight",
        "Dogtooth",
      ],
    },
    {
      name: "Jinbe",
      tags: [
        "fishman",
        "fishman karate",
        "straw hat",
        "warlord",
        "helmsman",
        "Jimbei",
      ],
    },
    {
      name: "Vivi",
      tags: [
        "alabasta",
        "princess",
        "straw hat",
        "Nefertari",
        "rebelle",
        "Poneglyphs",
      ],
    },
    {
      name: "Sabo",
      tags: [
        "revolutionary",
        "ace",
        "blue",
        "dragon",
        "Portgas D. Ace",
        "fire",
      ],
    },
    {
      name: "Crocodile",
      tags: [
        "mr 0",
        "baroque works",
        "shichibukai",
        "pluton",
        "desert",
        "Dorokku",
      ],
    },
    {
      name: "Smoker",
      tags: [
        "vice admiral",
        "smoker the white hunter",
        "logia",
        "garp",
        "marines",
        "white chase",
      ],
    },
    {
      name: "Enel",
      tags: ["god", "thunder", "skypiea", "priest", "gold", "Goro Goro no Mi"],
    },
    {
      name: "Ace",
      tags: [
        "fire",
        "Portgas D. Ace",
        "brother",
        "spade pirates",
        "captain",
        "Flame-Flame Fruit",
      ],
    },
    {
      name: "Shirahoshi",
      tags: [
        "princess",
        "Poseidon",
        "mermaid",
        "fishman island",
        "Noah",
        "Shirahoshi",
      ],
    },
    {
      name: "Law",
      tags: ["heart", "trafalgar", "sword", "op-op", "D", "Sword Saint"],
    },
    {
      name: "Buggy",
      tags: [
        "pirate",
        "clown",
        "roger",
        "baroque works",
        "shichibukai",
        "Chop-Chop Fruit",
      ],
    },
    {
      name: "Sengoku",
      tags: [
        "marines",
        "admiral",
        "sengoku the buddha",
        "marinford",
        "hito hito",
        "Hito Hito no Mi",
      ],
    },
    {
      name: "Kuzan",
      tags: ["ice", "admiral", "aokiji", "marines", "bike", "Ice-Ice Fruit"],
    },
    {
      name: "Bartolomeo",
      tags: [
        "straw hat grand fleet",
        "fanboy",
        "cannibal",
        "barrier",
        "Barto Club",
        "Bari Bari no Mi",
      ],
    },
    {
      name: "Perona",
      tags: [
        "hollow",
        "ghost princess",
        "horohorohoro",
        "thriller bark",
        "negative",
        "Negative Hollow",
      ],
    },
    {
      name: "X Drake",
      tags: ["dinosaur", "marines", "beast", "haki", "apoo", "Allosaurus"],
    },
    {
      name: "Cavendish",
      tags: [
        "hakuba",
        "white horse",
        "beautiful",
        "super rookie",
        "hakuba",
        "Durandal",
      ],
    },
    {
      name: "Tashigi",
      tags: ["smoker", "sword", "marine", "zoro", "kendo", "shigure"],
    },
    {
      name: "Rebecca",
      tags: ["gladiator", "kyros", "ruler", "diamante", "kings", "scarlet"],
    },
    {
      name: "Mr. 3",
      tags: [
        "wax",
        "mr 3",
        "bentham",
        "baroque works",
        "okama",
        "Dorikku Dorikku no Mi",
      ],
    },
    {
      name: "Borsalino",
      tags: [
        "kizaru",
        "admiral",
        "marines",
        "light",
        "borsalino",
        "Pika Pika no Mi",
      ],
    },
    {
      name: "Donquixote Rosinante",
      tags: ["corazon", "law", "smoker", "marine", "hearts", "Healing Curse"],
    },
    {
      name: "Donquixote Doflamingo",
      tags: [
        "donquixote",
        "doflamingo",
        "shichibukai",
        "king",
        "bird cage",
        "Ito Ito no Mi",
      ],
    },
    {
      name: "Naruto Uzumaki",
      tags: [
        "ninja",
        "rasengan",
        "kage bunshin",
        "hokage",
        "nine-tails",
        "Uzumaki clan",
      ],
    },
    {
      name: "Sasuke Uchiha",
      tags: ["ninja", "Sharingan", "Uchiha clan"],
    },
    {
      name: "Sakura Haruno",
      tags: ["ninja", "medical ninja", "Team 7"],
    },
    {
      name: "Kakashi Hatake",
      tags: ["ninja", "Sharingan", "Copy Ninja", "Hatake clan"],
    },
    {
      name: "Gaara",
      tags: ["ninja", "Kazekage", "Sand Village"],
    },
    {
      name: "Itachi Uchiha",
      tags: ["ninja", "Sharingan", "Uchiha clan", "Akatsuki"],
    },
    {
      name: "Jiraiya",
      tags: ["ninja", "Sannin", "Toad Sage", "Legendary Ninja"],
    },
    {
      name: "Tsunade Senju",
      tags: ["ninja", "Sannin", "Medical Ninja", "Hokage"],
    },
    {
      name: "Minato Namikaze",
      tags: ["ninja", "Fourth Hokage", "Yellow Flash", "Rasengan"],
    },
    {
      name: "Orochimaru",
      tags: ["ninja", "Sannin", "Snake Sage", "Forbidden Jutsu"],
    },
    {
      name: "Hinata Hyuga",
      tags: ["ninja", "Byakugan", "Hyuga clan"],
    },
    {
      name: "Neji Hyuga",
      tags: ["ninja", "Byakugan", "Hyuga clan"],
    },
    {
      name: "Rock Lee",
      tags: ["ninja", "Taijutsu", "Hard Work"],
    },
    {
      name: "Shikamaru Nara",
      tags: ["ninja", "strategist", "Shadow Possession Jutsu"],
    },
    {
      name: "Ino Yamanaka",
      tags: ["ninja", "mind transfer jutsu", "Team 10"],
    },
    {
      name: "Choji Akimichi",
      tags: ["ninja", "human boulder", "Akimichi clan"],
    },
    {
      name: "Kiba Inuzuka",
      tags: ["ninja", "Inuzuka clan", "Akamaru"],
    },
    {
      name: "Shino Aburame",
      tags: ["ninja", "bug user", "Aburame clan"],
    },
    {
      name: "Temari",
      tags: ["ninja", "Wind Style", "Sand Village"],
    },
    {
      name: "Kankuro",
      tags: ["ninja", "puppet master", "Sand Village"],
    },
    {
      name: "Konohamaru Sarutobi",
      tags: ["ninja", "Rasengan", "Sarutobi clan"],
    },
    {
      name: "Moegi",
      tags: ["ninja", "Wood Style", "Team 10"],
    },
    {
      name: "Udon",
      tags: ["ninja", "Wood Style", "Team 10"],
    },
    {
      name: "Iruka Umino",
      tags: ["ninja", "academy teacher", "Naruto's mentor"],
    },
    {
      name: "Anko Mitarashi",
      tags: ["ninja", "Snake Style", "Orochimaru's apprentice"],
    },
    {
      name: "Shizune",
      tags: ["ninja", "medical ninja", "Tsunade's assistant"],
    },
    {
      name: "Danzo Shimura",
      tags: ["ninja", "Root Anbu", "Shimura clan"],
    },
    {
      name: "Kurenai Yuhi",
      tags: ["ninja", "genjutsu master", "Team 8"],
    },
    {
      name: "Asuma Sarutobi",
      tags: ["ninja", "Wind Style", "Team 10"],
    },
  ];

  console.log(characters.length); // Output: 50

  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  // Get a random character
  const randomCharacter = characters[getRandomIndex(characters)];

  return (
    <>
      <h1 className="heading">Guess the Anime Character</h1>
      <Guesser character={randomCharacter}></Guesser>
    </>
  );
}

export default App;
