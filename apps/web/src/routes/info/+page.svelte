<script lang="ts">
  import configState from "$lib/state/config.svelte";
  import { difficultyToBgColour } from "$lib/utils/challenges";
  import { type Difficulty } from "$lib/constants/difficulties";
</script>

<div class="h-80 flex justify-center items-end home_div" id="info_div_container">
  <script src="https://kit.fontawesome.com/8ac6ea753d.js" crossorigin="anonymous"></script>
  <div id="info_div">
  <h2 class="text-4xl"><strong>
    The ANU's First O-Week Capture the Flag
Competition!
</strong>
  </h2>
  <br>
  <ul class="text-xl">
    <li>Beginner-friendly Computer Security challenges</li>
    <li>Teams of up to <strong>6</strong> players</li>
    <li><strong>$1000</strong> total prize value for top 3 teams</li>
  </ul>
<br>
  <div id="start_end_holder" class="flex press-start-2p">
    <div id="start_holder">
      <span id="start_title" class="time_title">Start</span><br>
      <span id="start_duration" class="time_duration">18 Feb 2pm</span>
    </div>
    <div id="end_holder">
      <span id="end_title" class="time_title">End</span><br>
      <span id="end_duration" class="time_duration">22 Feb 2pm</span>
    </div>
  </div>
<br>
  <hr>
<br>
  <h2 class="text-4xl"><strong>
    Rules
  </strong></h2><br>
  <ul>
    <li>
      Each player must register an individual account <a title="Login Screen" class="link" href="/auth">here</a>.
      Players may then join/form teams <a title="Teams Screen" class="link" href="/team">here</a>.
    </li>
    <li>The flag format is <code>{"bushbash{yourflaghere}"}</code>.</li>
    <li>
      Do not attack anything other than the provided infrastructure. In particular, please refrain
      from abusing any services hosted by ANU.
    </li>
    <li>Do not share flags or solutions publicly or with other teams.</li>
    <li>If you find a correct flag, please don't hold it until the last minute - this
      ensures the scoreboard always reflects the true progress of each team.
    </li>
    <li>
      Decisions made by the CSSA are final.
    </li>
    <li>
      Enjoy the challenges, learn plenty and have fun!
    </li>
  </ul>
  <br>
  <h2 class="text-4xl"><strong>
    Prizes
  </strong></h2><br>
  The following prizes are offered to the top teams in the <strong>ANU Division</strong>:<br><br>
  <strong>1st, 2nd, 3rd:</strong> <a href="https://www.bsidesau.com.au" target="_blank"  rel="noopener noreferrer" class="link">B-Sides Tickets</a> for all members!<br>
+ Exclusive <a href="https://tantosec.com" target="_blank"  rel="noopener noreferrer" class="link">TantoSec</a> goods, Rubiks Cubes, and CSSA hoodies!
  <br>
  <br>
    <hr>
  <br>
  <h2 class="text-4xl"><strong>
    Credits
  </strong></h2><br>
  <strong>Peter Woodhead</strong> - <i>"PetePete_Repeat"</i>
  <div class={`badge py-2 font-semibold pop ${difficultyToBgColour("beginner")}`}>CSSA</div><div class={`badge py-2 font-semibold pop ${difficultyToBgColour("hard")}`}>Problem Writer</div><div class={`badge py-2 font-semibold pop ${difficultyToBgColour("medium")}`}>Infra</div><div class={`badge py-2 font-semibold pop ${difficultyToBgColour("easy")}`}>Communications</div><div class={`badge py-2 font-semibold pop ${difficultyToBgColour("easy")}`}>Sponsorships</div><div class={`badge py-2 font-semibold pop ${difficultyToBgColour("easy")}`}>Organiser</div>
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/gr33nMari0" target="_blank"  rel="noopener noreferrer"><i class="fa-brands fa-square-github logos"></i>&nbsp;&nbsp;<span class="logos link">Github</span></a>&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/peterwoodhead" target="_blank"  rel="noopener noreferrer"><i class="fa-brands fa-linkedin logos"></i>&nbsp;&nbsp;<span class="logos link">Linkedin</span></a>
  <br><br>
  <strong>Alyssa Herald</strong> - <i>"CraftyDH"</i>
  <div class={`badge py-2 font-semibold pop ${difficultyToBgColour("beginner")}`}>CSSA</div><div class={`badge py-2 font-semibold pop ${difficultyToBgColour("hard")}`}>Problem Writer</div><div class={`badge py-2 font-semibold pop ${difficultyToBgColour("medium")}`}>Infra</div>
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/CraftyDH" target="_blank"  rel="noopener noreferrer"><i class="fa-brands fa-square-github logos"></i>&nbsp;&nbsp;<span class="logos link">Github</span></a>&nbsp;&nbsp;&nbsp;&nbsp;
  <br><br>
  <strong>Adrian Carpio</strong> - <i>"oreophone"</i>
  <div class={`badge py-2 font-semibold pop ${difficultyToBgColour("beginner")}`}>CSSA</div><div class={`badge py-2 font-semibold pop ${difficultyToBgColour("hard")}`}>Problem Writer</div><div class={`badge py-2 font-semibold pop ${difficultyToBgColour("medium")}`}>Website</div><div class={`badge py-2 font-semibold pop ${difficultyToBgColour("easy")}`}>Art & Design</div>
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/oreophone" target="_blank"  rel="noopener noreferrer"><i class="fa-brands fa-square-github logos"></i>&nbsp;&nbsp;<span class="logos link">Github</span></a>&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/adrian-carpio-8a3a523b0/" target="_blank"  rel="noopener noreferrer"><i class="fa-brands fa-linkedin logos"></i>&nbsp;&nbsp;<span class="logos link">Linkedin</span></a>
  <br><br>
  <strong>Harold Gao</strong> - <i>"Friska"</i>
  <div class={`badge py-2 font-semibold pop ${difficultyToBgColour("beginner")}`}>CSSA</div><div class={`badge py-2 font-semibold pop ${difficultyToBgColour("hard")}`}>Problem Writer</div><div class={`badge py-2 font-semibold pop ${difficultyToBgColour("easy")}`}>Communications</div>
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/LaFriska" target="_blank"  rel="noopener noreferrer"><i class="fa-brands fa-square-github logos"></i>&nbsp;&nbsp;<span class="logos link">Github</span></a>&nbsp;&nbsp;&nbsp;&nbsp;
  <br><br>
  <strong>Elliot</strong> - <i>"shminge"</i>
  <div class={`badge py-2 font-semibold pop ${difficultyToBgColour("beginner")}`}>CSSA</div><div class={`badge py-2 font-semibold pop ${difficultyToBgColour("hard")}`}>Problem Writer</div>
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/shminge" target="_blank"  rel="noopener noreferrer"><i class="fa-brands fa-square-github logos"></i>&nbsp;&nbsp;<span class="logos link">Github</span></a>&nbsp;&nbsp;&nbsp;&nbsp;
  <br><br><br>
  Many thanks to our volunteers & problem writers! :D
  <br>
  <br>

  <strong>Ben Pye</strong> - <i>"loki314"</i>
  <div class={`badge py-2 font-semibold pop ${difficultyToBgColour("hard")}`}>Problem Writer</div>
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/Loki314159" target="_blank"  rel="noopener noreferrer"><i class="fa-brands fa-square-github logos"></i>&nbsp;&nbsp;<span class="logos link">Github</span></a>&nbsp;&nbsp;&nbsp;&nbsp;
  <br><br>
  <strong>Cameron</strong> - <i>"QuadroTec"</i>
  <div class={`badge py-2 font-semibold pop ${difficultyToBgColour("hard")}`}>Problem Writer</div>
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/QuadroTec" target="_blank"  rel="noopener noreferrer"><i class="fa-brands fa-square-github logos"></i>&nbsp;&nbsp;<span class="logos link">Github</span></a>&nbsp;&nbsp;&nbsp;&nbsp;
  <br><br>
  <strong>Charlotte</strong> - <i>"charli.dev"</i>
  <div class={`badge py-2 font-semibold pop ${difficultyToBgColour("hard")}`}>Problem Writer</div>
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/sfulham" target="_blank"  rel="noopener noreferrer"><i class="fa-brands fa-square-github logos"></i>&nbsp;&nbsp;<span class="logos link">Github</span></a>&nbsp;&nbsp;&nbsp;&nbsp;
  <br><br>
  <strong>Eric Cao</strong> - <i>"Willsike"</i>
  <div class={`badge py-2 font-semibold pop ${difficultyToBgColour("hard")}`}>Problem Writer</div>
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/willsike1" target="_blank"  rel="noopener noreferrer"><i class="fa-brands fa-square-github logos"></i>&nbsp;&nbsp;<span class="logos link">Github</span></a>&nbsp;&nbsp;&nbsp;&nbsp;
  <br><br>
  <strong>Jaidyn Johnston</strong> - <i>"justjayiguess"</i>
  <div class={`badge py-2 font-semibold pop ${difficultyToBgColour("hard")}`}>Problem Writer</div>
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/JustJayIGuess" target="_blank"  rel="noopener noreferrer"><i class="fa-brands fa-square-github logos"></i>&nbsp;&nbsp;<span class="logos link">Github</span></a>&nbsp;&nbsp;&nbsp;&nbsp;
  <br><br>
  <strong>Long Feng</strong> - <i>"Eisverygoodletter"</i>
  <div class={`badge py-2 font-semibold pop ${difficultyToBgColour("hard")}`}>Problem Writer</div>
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/Eisverygoodletter" target="_blank"  rel="noopener noreferrer"><i class="fa-brands fa-square-github logos"></i>&nbsp;&nbsp;<span class="logos link">Github</span></a>&nbsp;&nbsp;&nbsp;&nbsp;
  <br>

  <br><br>
  <h2 class="text-4xl"><strong>
    Contacts
  </strong></h2><br>
  Have questions about a particular challenge or the competition as a whole? Feel free to contact
  the CSSA through the following channels:
  <br><br>
  <ul>
    <li>
      Our <a href="https://cssa.club/discord" target="_blank"  rel="noopener noreferrer" class="link">Discord Server</a>
    </li>
    <li>
      Our Email <code>anucssacommittee@gmail.com</code> - Please prepend the subject with <code>[CTF]</code> so it can be seen by us.
    </li>
  </ul>
  <br>
  Note that any clarifications/challenge updates will be announced publicly on this website.
  Announcements may be viewed on the <a class="link" title="Challenge Screen" href="/challenges">Challenges</a> screen.
  </div>
</div>
