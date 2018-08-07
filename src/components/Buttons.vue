<template lang="html">
  <div class="col-3">
  <button class="btn" :class="buttonClass" @click="play">{{ action }}</button>
</div>
</template>

<script>
import Pike from '../inhabitants/Pike';
import Crucian from '../inhabitants/Crucian';
import Seaweed from '../inhabitants/Seaweed';

export default {
  data() {
    return {
      gameStarted: false,
      action: 'Start Game',
      buttonClass: { 'btn-success': true },
    };
  },
  methods: {
    play() {
      const canvas = document.getElementById('canvas');
      const context = canvas.getContext('2d');
      const cellSize = 30;
      const map = [];
      const fillTank = () => {
        for (let i = 0; i < this.$store.getters.pikesNumber; i += 1) {
          map.push(new Pike());
        }

        for (let i = 0; i < this.$store.getters.cruciansNumber; i += 1) {
          map.push(new Crucian());
        }

        for (let i = 0; i < this.$store.getters.seaweedsNumber; i += 1) {
          map.push(new Seaweed());
        }
      };
      function DrawInhabitant(x, y, type) {
        const img = document.getElementById(type);
        context.drawImage(img, x, y, cellSize, cellSize);
      }
      const DrawElem = (elem) => {
        DrawInhabitant((elem.coords.x * cellSize), (elem.coords.y * cellSize), elem.name);
      };
      const removeElem = (elem) => {
        const index = map.indexOf(elem);
        map.splice(index, 1);
      };
      const crucianStep = (crucian) => {
        crucian.swim();
        const seaweed = map.find((elem) => { // eslint-disable-line arrow-body-style
          return (elem.name === 'seaweed' &&
                  elem.coords.x === crucian.coords.x &&
                  elem.coords.y === crucian.coords.y);
        });
        if (seaweed) {
          removeElem(seaweed);
        }
      };
      const pikeStep = (pike) => {
        pike.swim();
        const crucianHere = map.find((elem) => { // eslint-disable-line arrow-body-style
          return (elem.name === 'crucian' &&
                  elem.coords.x === pike.coords.x &&
                  elem.coords.y === pike.coords.y);
        });
        if (crucianHere) {
          pike.eatCrucian(crucianHere.weight);
          removeElem(crucianHere);
        }
        if (pike.weight <= 0) {
          removeElem(pike);
        }
      };

      const canBeReproduced = (elem, item) => { // eslint-disable-line arrow-body-style
        return (elem.name === item.name &&
                 elem.age >= 3 &&
                  item.age >= 3 &&
                   elem.gender !== item.gender &&
                    elem.coords.x === item.coords.x &&
                     elem.coords.y === item.coords.y);
      };

      const reproduction = () => {
        map.forEach((item) => {
          if (item.name !== 'seaweed') {
            const canReproduce = map.find((elem) => { // eslint-disable-line arrow-body-style
              return canBeReproduced(elem, item);
            });
            if (canReproduce && item.name === 'crucian') {
              map.push(new Crucian());
            } else if (canReproduce && item.name === 'pike') {
              map.push(new Pike());
            }
          }
        });
      };

      fillTank();

      for (let i = 0; i < map.length; i += 1) {
        DrawElem(map[i]);
      }

      const run = setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        reproduction();
        map.forEach((item) => {
          DrawElem(item);
          switch (item.name) {
            case 'crucian':
              crucianStep(item);
              break;
            case 'pike':
              pikeStep(item);
              break;
            default:
          }
        });
        map.push(new Seaweed());
      }, this.$store.getters.interval);

      if (!this.$store.getters.gameStarted) {
        this.$store.commit('startGame');
      } else {
        this.$store.commit('stopGame');
        clearInterval(run);
      }
      this.action = this.$store.getters.gameStarted ? 'Stop Game' : 'Start Game';
      this.buttonClass = this.$store.getters.gameStarted ? ({ 'btn-danger': true }) : ({ 'btn-success': true });
    },
  },
};
</script>

<style lang="css">
</style>
