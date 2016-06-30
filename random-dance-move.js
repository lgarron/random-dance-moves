"use strict";

var $ = document.querySelector.bind(document);

var grammar = {
  "@variation": [
    "@modification @move @positionkind @danceapplication @timing @extra"
  ],
  "@modification": [
    "", "",
    "double",
    "reverse",
    "role-reversed",
    "back-led",
    "gypsy",
    "behind-the-back",
    "Mazurka",
    "zig-zag",
    "hesitation",
    "chained",
    "leaping",
    "triple", // Suggested by Nick
    "continuous", // Suggested by Nick
    "open", // Suggested by Nick
    "closed", // Suggested by Nick
    "one-handed", // Suggested by Nick
    "two-handed", // Suggested by Nick
    "troika", // Suggested by Nick
    "partner-switching", // Suggested by Nick
    "wrong-way", // Suggested by Nick
    "backwards", // Suggested by Nick
    "over-the-elbows", // Suggested by Nick
    "magic", // Suggested by Nick
    "easy-going", // Suggested by Nick
    "blind" // Suggested by Nick
  ],
  "@move": [
    "@pivotthing",
    "@basic",
    "@turn",
    "@aerial",
    "@handmove",
    "@step",
    "@tangothing",
    "@latinthing"
  ],
  "@positionkind": [
    "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
    "from @position",
    "in @position",
    "into @position"
  ],
  "@position": [
    "wedding cake handhold",
    "shadow position",
    "swingout position",
    "hammerlock",
    "waltz position",
    "cuddle position",
    "sweetheart position",
    "Lindy circle",
    "back-to-back position",
    "crossed hands", // Suggested by Nick
    "airplane position", // Suggested by Nick
    "open position", // Suggested by Nick
    "Yale position", // Suggested by Nick
    "linked elbows" // Suggested by Nick
  ],
  "@danceapplication": [
    "", "", "", "", "", "", "", "", "", "", "", "",
    "during @dance",
    "while transitioning into @dance",
    "as a line dance", // Suggested by Brett.
    "with a clap", // Suggested by Nick
    "with a stomp" // Suggested by Nick
  ],
  "@timing": [
    "", "", "", "", "", "", "", "", "", "", "", "", "",
    "in @timesignature" // Suggested by Brett.
  ],
  "@timesignature": [
    "4/4 time",
    "3/4 time",
    "5/4 time",
    "7/4 time"
  ],
  "@extra": [
    "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
    "followed by @variation",
    "which resolves to @variation"
  ],
  "@turn": [
    "@turnvariation @turnkind @turnmove"
  ],
  "@turnvariation": [
    "", "", "", "",
    "cross-body",
    "tuck", // Suggested by Nick
    "tandem" // Suggested by Nick
  ],
  "@turnkind": [
    "free",
    "under-arm",
    "rollaway",
    "inside",
    "outside",
    "illusion",
    "walk-around",
    "dishrag" // Suggested by Nick
  ],
  "@turnmove": [
    "spin",
    "turn",
    "wrap",
    "he-goes-she-goes"
  ],
  "@basic": [
    "swingout",
    "Charleston kicks",
    "turning basic"
  ],
  "@step": [
    "gallop",
    "grapevine",
    "foot-fudge",
    "Suzie Q", // Suggested by Brett
    "genuflection",
    "waterfall",
    "windmill",
    "swivels", // Suggested by Emily
    "wheel", // Suggested by Nick
    "around the world", // Suggested by Nick
    "follower's solo", // Suggested by Nick
    "hops", // Suggested by Nick
    "heel clicks", // Suggested by Nick
    "side sway" // Suggested by Nick
  ],
  "@aerial": [
    "backflip",
    "lift"
  ],
  "@tangothing": [
    "dip",
    "ochos",
    "molinete" // Suggested by Nick
  ],
  "@pivotthing": [
    "@pivotkind @pivotmove"
  ],
  "@pivotkind": [
    "", "", "",
    "canter"
  ],
  "@pivotmove": [
    "pivots",
    "pivaloop"
  ],
  "@handthing": [
    "@handkind @handmove"
  ],
  "@handkind": [
    "", "", "",
    "wrap-around",
    "cloud hands" // Suggested by Nick
  ],
  "@handmove": [
    "hand change",
    "Texas Tommy",
    "waist slide",
    "face loop",
    "orbits",
    "barrel roll",
    "shopping cart",
    "side pass",
    "sunburst", // Suggested by Lauren
    "whip", // Suggested by Nick
    "loop-de-loops", // Suggested by Nick
    "tunnel", // Suggested by Nick
    "pretzel", // Suggested by Nick
    "windows", // Suggested by Nick
    "Zillertaler Landler arms", // Suggested by Nick
    "shoulder catch" // Suggested by Nick
  ],
  "@latinthing": [
    "matador",
    "sombrero",
    "tornado", // Suggested by Nick
    "mixmaster", // Suggested by Nick
    "neck roll" // Suggested by Nick
  ],
  "@dance": [
    "@swingdance",
    "@latindance",
    "@waltzdance",
    "@polkadance",
    "@walkeydance",
    "@discodance",
    "@choreodance",
    "@mixerdance",
    "@linedance"
  ],
  "@swingdance": [
    "@swingkind swing",
    "Lindy Hop",
    "Charleston",
    "blues"
  ],
  "@swingkind": [
    "", "",
    "4-count",
    "6-count",
    "west coast",// Suggested by Nick
  ],
  "@latindance": [
    "salsa",
    "cha-cha",
    "tango", // Suggested by Nick
    "merengue", // Suggested by Nick
    "samba", // Suggested by Nick
    "rumba"
  ],
  "@waltzdance": [
    "@waltzkind waltz"
  ],
  "@waltzkind": [
    "",
    "rotary",
    "cross-step",
    "Redowa"
  ],
  "@polkadance": [
    "polka",
    "Maxixe",
    "Schottische",
    "Zwiefacher", // Didn't want to group it with waltzes.
    "hambo" // Suggested by Nick
  ],
  "@walkeydance": [
    "one-step", // Suggested by Nick
    "quickstep",
    "foxtrot" // Suggested by Nick
  ],
  "@discodance": [
    "hustle",
    "club two step" // Suggested by Nick
  ],
  "@choreodance": [
    "Bohemian National Polka",
    "Congress of Vienna",
    "Peanut Butter Jelly Time",
    "Kerry Polka Sets",
    "Russian Mazurka Quadrille"
  ],
  "@mixerdance": [
    "Cross-Step Waltz Mixer",
    "Polka Mixer"
  ],
  "@linedance": [
    "Tokyo Polka",
    "Bus Stop",
    "Accelerating Travolta",
    "Shim-Sham"
  ],
  "@again": [
    "Gimme Another!",
    "Welcome another chance intrusion!",
    "How do I get out of it?",
    "Tried that last Friday. I want a better one!",
    "Different \u2260 Wrong",
    "I want one that will actually make me dizzy.",
    "Richard already taught us that last week.",
    "Faked what I thought I saw.",
    "Make stuff up!",
    "What do you do if...? Smile!",
    "Did this one prettier than the teacher!",
    "Pick yourself up, dust yourself off, start all over again."
  ]
};

var randomChoice = function(l) {
  return l[Math.floor(Math.random() * l.length)];
}

var expand = function(term) {
  if (term[0] !== "@") {
    return term;
  }
  var subterms = randomChoice(grammar[term]).split(" ");
  var nonEmpty = function(x){return x!=""};
  return subterms.map(expand).filter(nonEmpty).join(" ")
}

var go = function() {
  $("#variation").textContent = expand("@variation");
  $("#again").textContent = expand("@again");
}
