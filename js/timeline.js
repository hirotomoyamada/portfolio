// タイムラインアニメーション
const timelineAnimation = ()=> {

  // intro
  gsap.timeline({
    scrollTrigger: {
      trigger: '.scrollTimeline',
      start: 'top top',
      end: '8% top',
      scrub: true
    }
  })
  .to('.scrollMouse', {
    opacity: 0,
    duration: 1000
  })
  .to('.intro_img', {
    opacity: 0,
    ease: Power4.easeIn,
    duration: 1000
  }, '<')
  .to('.intro_ttl', {
    y: '-70vh',
    delay: 500,
    duration: 1000
  }, '<')
  .from('.shdw_me', {
    y: '100%',
    delay: 500,
    duration: 1500
  }, '<')
  .set('.shdw_me', {
    y: 0
  })
  .from('.bg', {
    opacity: 0,
    duration: 1000
  }, '<')
  .to('.scrollNum', {
    color: '#FFF',
    duration: 1000
  }, '<')
  .to('.intro', {
    opacity: 0
  }, '<')

  // bg_start
  gsap.timeline({
    scrollTrigger: {
      trigger: '.scrollTimeline',
      start: '10% top',
      end: '11%% top',
      once: true,
      onEnter: bgAnimation
    }
  })

  // about
  gsap.timeline({
    scrollTrigger: {
      trigger: '.scrollTimeline',
      start: '11% top',
      end: '15% top',
      scrub: true,
      onEnter: startedBgAnimation
    }
  })
  .from('.about_desc span', {
    y: ()=> {return anime.random(-500, 500)},
    opacity: 0,
    duration: 100,
    ease: Power4.easeOut,
    stagger: 10
  })
  .from('.about_ttl span', {
    x: ()=> {return anime.random(-500, 500)},
    opacity: 0,
    duration: 100,
    ease: Power4.easeOut,
    stagger: 10
  })
  .to('.about_desc', {
    y: '100%',
    opacity: 0,
    duration: 100,
    ease: Power2.easeIn
  })
  .to('.about_ttl', {
    y: '100%',
    opacity: 0,
    duration: 100,
    ease: Power2.easeIn
  }, '<')

  // serf
  gsap.timeline({
    scrollTrigger: {
      trigger: '.scrollTimeline',
      start: '15% top',
      end: '23% top',
      scrub: true,
      onEnter: startedBgAnimation
    }
  })
  .from('.serf_timeline_01 span', {
    y: ()=> {return anime.random(-500, 500)},
    rotate: ()=> {return anime.random(-90, 90)},
    opacity: 0,
    duration: 100,
    ease: Power4.easeOut,
    stagger: 10
  })
  .from('.serf_timeline_02 span', {
    scale: .1,
    rotate: '-15deg',
    opacity: 0,
    duration: 100,
    ease: Power4.easeOut,
    stagger: 10
  })
  .from('.serf_timeline_03 span', {
    y: ()=> {return anime.random(-500, 500)},
    rotate: ()=> {return anime.random(-90, 90)},
    opacity: 0,
    duration: 100,
    ease: Power4.easeOut,
    stagger: 10
  })
  .from('.serf_timeline_04 span', {
    scale: .1,
    rotate: '-15deg',
    opacity: 0,
    duration: 100,
    ease: Power4.easeOut,
    stagger: 10
  })
  .to('.serf_content', {
    y: '100%',
    opacity: 0,
    delay: 100,
    duration: 100,
    ease: Power2.easeIn
  })

  // keyhole
  gsap.timeline({
    scrollTrigger: {
      trigger: '.scrollTimeline',
      start: '25% top',
      end: '33% top',
      scrub: 1,
      onEnter: startedBgAnimation,
      onLeave: () => {
        hiddenElement('.about');
        hiddenElement('.serf');
        hiddenElement('.keyhole');
        hiddenElement('.keyhole_figure');
        hiddenElement('.bg');

        zIndex('.shdw', 3);
      },
      onEnterBack: () => {
        showElement('.about');
        showElement('.serf');
        showElement('.keyhole');
        showElement('.keyhole_figure');
        showElement('.bg');

        zIndex('.shdw', 99);
        startedBgAnimation();
      }
    }
  })
  .from('.keyhole_timeline_01 span', {
    opacity: 0,
    duration: 1,
    ease: Power4.easeOut,
    stagger: .3
  })
  .from('.keyhole_timeline_02 span', {
    opacity: 0,
    duration: 1,
    ease: Power4.easeOut,
    stagger: .3
  })
  .from('.keyhole_timeline_03', {
    opacity: 0,
    duration: 1,
    ease: Power4.easeOut
  })
  .from('.keyhole_figure', {
    opacity: 0,
    duration: 1,
    ease: Power4.easeIn
  })
  .to('.keyhole_figure', {
    scale: 120,
    y: '20vh',
    duration: 3,
    delay: 3,
    ease: Power2.easeIn
  })
  .to('.scrollNum', {
    color: '#141414',
    delay: 2,
    duration: 3
  }, '<')

  // history_01
  gsap.timeline({
    scrollTrigger: {
      trigger: '.scrollTimeline',
      start: '35% top',
      end: '41% top',
      scrub: 1,
      onEnter: ()=> {
        zIndex('.shdw', 3);
        hiddenElement('.bg');
      }
    }
  })
  .to('.pokemon', {
    opacity: 1,
    scale: 1,
    duration: 1000,
    ease: Power4.easeOut
  })
  .from('.history_01_contents span', {
    scale: .1,
    rotate: ()=> {return anime.random(-360, 360)},
    x: ()=> {return anime.random(500, -500)},
    y: ()=> {return anime.random(500, -500)},

    opacity: 0,
    duration: 3000,
    ease: Power4.easeOut,
    stagger: 5
  })
  .to('.history_01_contents', {
    opacity: 0,
    duration: 1000,
    delay: 1000,
    ease: Power2.easeIn
  })

  // history_02
  gsap.timeline({
    scrollTrigger: {
      trigger: '.scrollTimeline',
      start: '41% top',
      end: '45% top',
      scrub: 1,
      onEnter: ()=> {
        hiddenElement('.bg');

        zIndex('.shdw', 3);
      }
    }
  })
  .from('.history_02_contents span', {
    scale: .1,
    rotate: ()=> {return anime.random(-360, 360)},
    x: ()=> {return anime.random(500, -500)},
    y: ()=> {return anime.random(500, -500)},

    opacity: 0,
    duration: 3000,
    ease: Power4.easeOut,
    stagger: 5
  })
  .to('.history_02_contents', {
    opacity: 0,
    duration: 1000,
    delay: 1000,
    ease: Power2.easeIn
  })

  // history_03
  gsap.timeline({
    scrollTrigger: {
      trigger: '.scrollTimeline',
      start: '45% top',
      end: '51% top',
      scrub: 1,
      onEnter: ()=> {
        hiddenElement('.bg');

        zIndex('.shdw', 3);
      }
    }
  })
  .from('.history_03_contents span', {
    scale: .1,
    rotate: ()=> {return anime.random(-360, 360)},
    x: ()=> {return anime.random(500, -500)},
    y: ()=> {return anime.random(500, -500)},

    opacity: 0,
    duration: 3000,
    ease: Power4.easeOut,
    stagger: 5
  })
  .to('.history_03_contents', {
    opacity: 0,
    duration: 1000,
    delay: 1000,
    ease: Power2.easeIn
  })
  .to('.pokemon', {
    opacity: 0,
    duration:  1000,
    ease: Power4.easeIn
  }, '<')

  // achievement
  gsap.timeline({
    scrollTrigger: {
      trigger: '.scrollTimeline',
      start: '52% top',
      end: '58% top',
      scrub: 1,
      onEnter: ()=> {
        hiddenElement('.bg');

        zIndex('.shdw', 3);
      }
    }
  })
  .to('.master_chief', {
    opacity: 1,
    scale: 1,
    duration: 2000,
    ease: Power4.easeOut
  })
  .from('.achievement_ttl span', {
    y: ()=> {return anime.random(-500, 500)},
    opacity: 0,
    duration: 2000,
    stagger: 100,
    ease: Power4.easeOut
  })
  .from('.achievement_content span', {
    scale: .1,
    rotate: ()=> {return anime.random(-360, 360)},
    x: ()=> {return anime.random(500, -500)},
    y: ()=> {return anime.random(500, -500)},

    opacity: 0,
    duration: 3000,
    ease: Power4.easeOut,
    stagger: 5
  })
  .to('.achievement_ttl', {
    opacity: 0,
    duration: 1000,
    ease: Power2.easeIn
  },)
  .to('.achievement_content', {
    opacity: 0,
    duration: 1000,
    ease: Power2.easeIn
  }, '<')
  .to('.master_chief', {
    opacity: 0,
    duration:  1000,
    ease: Power4.easeIn
  }, '<')

  // client
  gsap.timeline({
    scrollTrigger: {
      trigger: '.scrollTimeline',
      start: '59% top',
      end: '65% top',
      scrub: 1,
      onEnter: ()=> {
        hiddenElement('.bg');

        zIndex('.shdw', 3);
      }
    }
  })
  .to('.darth_vader', {
    opacity: 1,
    scale: 1,
    duration: 2000,
    ease: Power4.easeOut
  })
  .from('.client_ttl span', {
    y: ()=> {return anime.random(-500, 500)},
    opacity: 0,
    duration: 2000,
    stagger: 100,
    ease: Power4.easeOut
  })
  .from('.client_content span', {
    scale: .1,
    rotate: ()=> {return anime.random(-360, 360)},
    x: ()=> {return anime.random(500, -500)},
    y: ()=> {return anime.random(500, -500)},

    opacity: 0,
    duration: 3000,
    ease: Power4.easeOut,
    stagger: 5
  })
  .to('.client_ttl', {
    opacity: 0,
    duration: 1000,
    ease: Power2.easeIn
  },)
  .to('.client_content', {
    opacity: 0,
    duration: 1000,
    ease: Power2.easeIn
  }, '<')
  .to('.darth_vader', {
    opacity: 0,
    duration:  1000,
    ease: Power4.easeIn
  }, '<')

  // shdw_fadeOut
  gsap.timeline({
    scrollTrigger: {
      trigger: '.scrollTimeline',
      start: '65% top',
      end: '69% top',
      ease: Power4.easeIn,
      scrub: true,
      onEnter: ()=> {
        hiddenElement('.bg');

        zIndex('.shdw', 3);
      },
      onLeave: ()=> {
        hiddenElement('.history');
        hiddenElement('.achievement');
        hiddenElement('.client');
        hiddenElement('.bg');

        zIndex('.shdw', 3);
      },
      onEnterBack: ()=> {
        showElement('.history');
        showElement('.achievement');
        showElement('.client');
        hiddenElement('.bg');

        zIndex('.shdw', 3);
        bodyBgChange('#FFF');
      },
      onLeaveBack: ()=> {
        hiddenElement('.bg');

        zIndex('.shdw', 3);
      }
    }
  })
  .to('.shdw_me', {
    y: '100%'
  })
  .set('.shdw_me', {
    y: '100%'
  })

  // ultraman
  gsap.timeline({
    scrollTrigger: {
      trigger: '.scrollTimeline',
      start: '69% top',
      end: '72% top',
      scrub: 1,
      onEnter: ultraFlash,
      onEnterBack: ultraFlash,
      onLeave: ultraFlash,
      onLeaveBack: ultraFlash
    }
  })
  .from('.ultraman', {
    opacity: 0,
    duration: 1000,
    ease: Power2.easeIn
  })
  .to('.scrollNum', {
    color: '#FFF',
  }, '<')
  .to('.ultraman_shdw', {
    scale: 7,
    x: '-15vw',
    duration: 3000,
    ease: SteppedEase.config(3)
  })
  .to('.ultraman_shdw', {
    opacity: 0,
    duration: 1000,
    ease: Power2.easeOut
  })
  .from('.favorite', {
    opacity: 0
  }, '<')

  // favorite_01
  gsap.timeline({
    scrollTrigger: {
      trigger: '.scrollTimeline',
      start: '72% top',
      end: '78% top',
      scrub: 1,
      onEnter: ()=> {
        bodyBgChange('#E60002');
      },
      onLeaveBack: ()=> {
        bodyBgChange('#FFF');
      }
    }
  })
  .from('.favorite_ttl span', {
    y: ()=> {return anime.random(-500, 500)},
    opacity: 0,
    duration: 2000,
    stagger: 100,
    ease: Power4.easeOut
  })
  .from('.favorite_bg', {
    opacity: 0,
    duration: 2000,
    ease: Power2.easeOut
  }, '<')
  .from('.favorite_01_contents span', {
    scale: .1,
    rotate: ()=> {return anime.random(-360, 360)},
    x: ()=> {return anime.random(500, -500)},
    y: ()=> {return anime.random(500, -500)},

    opacity: 0,
    duration: 3000,
    ease: Power4.easeOut,
    stagger: 5
  })
  .to('.favorite_01_contents', {
    opacity: 0,
    duration: 1000,
    delay: 1000,
    ease: Power2.easeIn
  })

  // favorite_02
  gsap.timeline({
    scrollTrigger: {
      trigger: '.scrollTimeline',
      start: '78% top',
      end: '84% top',
      scrub: 1
    }
  })
  .from('.favorite_02_contents span', {
    scale: .1,
    rotate: ()=> {return anime.random(-360, 360)},
    x: ()=> {return anime.random(500, -500)},
    y: ()=> {return anime.random(500, -500)},

    opacity: 0,
    duration: 3000,
    ease: Power4.easeOut,
    stagger: 5
  })
  .to('.favorite_ttl', {
    opacity: 0,
    delay: 1000,
    duration: 1000,
    ease: Power2.easeIn
  })
  .to('.favorite_wrap', {
    opacity: 0,
    duration: 1000,
    ease: Power2.easeIn
  }, '<')
  .to('.favorite_bg', {
    opacity: 0,
    duration: 1000,
    ease: Power2.easeIn
  }, '<')

  // godzilla
  gsap.timeline({
    scrollTrigger: {
      trigger: '.scrollTimeline',
      start: '86% top',
      end: '92% top',
      scrub: 1
    }
  })
  .from('.godzilla', {
    y: '100%',
    duration: 1000
  })
  .to('.godzilla_shdw', {
    scale: 10,
    x: '-10vw',
    duration: 1000,
    ease: Power2.easeIn
  })

  // end
  gsap.timeline({
    scrollTrigger: {
      trigger: '.scrollTimeline',
      start: '92% top',
      end: '99% top',
      ease: Power4.easeIn,
      scrub: true,
      onEnter: ()=> {
        zIndex('.shdw', 99);
        bodyBgChange('#000');

        hiddenElement('.ultraman');
        hiddenElement('.favorite');
        hiddenElement('.godzilla');

        const el = document.querySelectorAll('.scrollNum_value');
        el.forEach((target, index) => {
          target.classList.add(`premonition_${index}`);
        })
        document.querySelector('.scrollNum_tag').classList.add('premonition_3');
      },
      onLeaveBack: ()=> {
        zIndex('.shdw', 3);
        bodyBgChange('#E60002');

        showElement('.ultraman');
        showElement('.favorite');
        showElement('.godzilla');
      }
    }
  })
  .from('.end', {
    opacity: 0
  })
  .to('.shdw_me', {
    y: 0,
    duration: 1000
  })
  .from('.end_img', {
    y: '-70vh',
    duration: 1000,
    ease: Power4.easeOut
  })
  .to('.scrollNum', {
  color: '#E60002',
  delay: 800
  }, '<')
  .from('.egg', {
  y: '150%'
  }, '<')
}
