BPM = 93,
sr = 48e3,
A = 440,

T = t/sr*BPM,
notes = ["A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5",
			"A5", "A#5", "B5", "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6", "A6"],
s = (n,o=0) => asin(sin(t*(2**o)*PI/sr*A*(2**(1/12))**notes.indexOf(n))),

b = ["D#5","G#5","C#6","F#5","C6","B5","A#5"][floor(T/128)%7],
c1 = ["A#5","G#5","B5","A#5","A#5","A#5","G#5"][floor((T-21.33)/128)%7],
c2 = ["C#6","C6","D#6","C#6","C6","B5","A#5"][floor((T-21.33)/128)%7],
c3 = ["D#6","D#6","F6","F6","D#6","D#6","D6"][floor((T-21.33)/128)%7],
c4 = ["F#6","F#6","G#6","F#6","F#6","F#6","F#6"][floor((T-21.33)/128)%7],

bass = s(b,-2)/4*(1-(T%128/128)),
chords = T-21.33<0?0:(s(c1,-1)+s(c2,-1)+s(c3,-1)+s(c4,-1))/5*(1-((T-21.33)%128/128)),
shaker = random()/max(0.05,((T&16?T-5.33:T)%16/16))/100,

bass + chords + shaker