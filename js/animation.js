// loadアニメーション
const load = ()=> {
  
  tl = new TimelineMax();
  tl.staggerFromTo('.load_op1_letter span', 1, {y: '50px'}, {y: 0, ease: Power2.easeInOut}, .1).addLabel('op1_in')
    .to('.load_op1_letter', .5, {opacity: 0, ease: Power2.easeInOut,}, 'op1_in+=.8').addLabel('op1_out')
    .staggerFromTo('.load_op2_letter span', 1, {y: '50px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeInOut}, .1, 'op1_out+=.3').addLabel('op2_in')
    .from('.load_op2', 1, {x: '90%', ease: Power2.easeInOut,}, 'op2_in+=.1').addLabel('op2_slide')
    .fromTo('.load_op3_overlay', 1, {x: '-101%'}, {x: 0, ease: Power2.easeInOut,}, 'op2_slide+=.1').addLabel('op3_slide')
    .fromTo('.load_op3_letter', .1, {opacity: 0}, {opacity: 1}, 'op2_out+=.3').addLabel('op3_in')
    .to('.load_op3_overlay', 1, {x: '110%', ease: Power2.easeInOut,}, 'op3_slide+=.3').addLabel('letter_end')
    .fromTo('.load_overlay', 1, {x: '-100%'}, {x: 0, ease: Power2.easeInOut,}, 'letter_end+=1').addLabel('overlay_slide')
    .to('.load', 1, {opacity: 0, ease: Power2.easeInOut,}, 'overlay_slide+=.1').add('op_end')
    .call(()=> {document.body.classList.remove('lock')})
    .to('.load', 1, {display: 'none'}, 'overlay_slide+=.1').add('load_end')
    .from('.intro_img', 1, {opacity: 0, ease: Power2.easeOut}, 'load_end+=.1').add('intro_img')
    .from('.intro_ttl', 1, {y: '-100%', opacity: 0, ease: Power2.easeOut}, 'intro_img+=.1')
  ; 
}

// alreadyアニメーション
const already = ()=> {

  tl = new TimelineMax();
  tl.staggerTo('.already_el', 1.8, {opacity: 0, ease: Power4.easeOut}, .2).addLabel('alreadyEl')
    .to('.already', .3, {opacity: 0, display: 'none', ease: Power2.easeIn}, 'alreadyEl+=.2')
    .call(()=> {document.body.classList.remove('lock')})
    .from('.intro_img', 1, {x: '10%', opacity: 0, ease: Power2.easeOut}).addLabel('intro_img')
    .from('.intro_ttl', 1, {y: '-100%', opacity: 0, ease: Power2.easeOut}, 'intro_img+=.1')
  ;
}

// loadアニメーション制御
const stopLoadAnimation = ()=> {
  const load = document.getElementById('load');
  load.style.display = 'none';
}

// alreadyアニメーション制御
const stopAlreadyAnimation = ()=> {
  const already = document.getElementById('already');
  already.style.display = 'none';
}

// shdwアニメーション
const shdwAnimation = ()=> {
  const shdw = document.querySelector('.shdw_me');

  window.addEventListener('scroll', ()=> {
    // トップから現在スクロール量を測定し、下3桁を取得
    const y = Math.floor(pageYOffset / 100) % 10;

    switch (y) {
      case 0: 
        shdw.src = '..img/shdw/00.png';
        break;
      case 1:
        shdw.src = '..img/shdw/01.png';
        break;
      case 2:
        shdw.src = '..img/shdw/02.png';
        break;
      case 3:
        shdw.src = '..img/shdw/03.png';
        break;
      case 4:
        shdw.src = '..img/shdw/04.png';
        break;
      case 5:
        shdw.src = '..img/shdw/05.png';
        break;
      case 6:
        shdw.src = '..img/shdw/06.png';
        break;
      case 7:
        shdw.src = '..img/shdw/07.png';
        break;
      case 8:
        shdw.src = '..img/shdw/08.png';
        break;
      case 9:
        shdw.src = '..img/shdw/09.png';
        break;
    }
  })
}

// ultramanアニメーション
const ultraFlash = ()=> {
  const el = document.querySelector('.ultraman');
  el.classList.toggle('flash')
}

// スクロール数値アニメーション
const scrollNumAnimation = ()=> {
  const el1 = document.querySelector('.scrollNum_01');
  const el2 = document.querySelector('.scrollNum_02');
  const el3 = document.querySelector('.scrollNum_03');

  let i = 0;
  let i1 = 0;
  let i2 = 0;

  // スクロール時実行
  window.addEventListener('scroll', ()=> {
    const y = window.pageYOffset;
    const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const n = Math.trunc((y / h) * 100);

    const n1 = Math.floor(n / 1) % 10;
    const n2 = Math.floor(n / 10) % 10;
    
    if (i !== n) {
      if (i1 !== n1) {
        tl = new TimelineMax();
        tl.to(el1, 1, {opacity: 0, y: '100%', ease: Power4.easeIn})
          .set(el1, {y: '-100%'})
          .call(()=> { el1.textContent = n1;})
          .to(el1, 1, {opacity: 1, y: '0%', ease: Power4.easeIn})
        i1 = n1;
      }
      if (i2 !== n2) {
        tl = new TimelineMax();
        tl.to(el2, 1, {opacity: 0, y: '100%', ease: Power4.easeIn})
          .set(el2, {y: '-100%'})
          .call(()=> { el2.textContent = n2;})
          .to(el2, 1, {opacity: 1, y: '0%', ease: Power4.easeIn})
        i2 = n2;
      }
      i = n;
    }

    if (99 <= n) {
      tl = new TimelineMax();
      tl.to(el3, 1, {opacity: 0, y: '100%', ease: Power4.easeIn})
        .set(el3, {y: '-100%'})
        .call(()=> { el3.textContent = 4;})
        .to(el3, 1, {opacity: 1, y: '0%', ease: Power4.easeIn})
      tl = new TimelineMax();
      tl.to(el2, 1, {opacity: 0, y: '100%', ease: Power4.easeIn})
        .set(el2, {y: '-100%'})
        .call(()=> { el2.textContent = 0;})
        .to(el2, 1, {opacity: 1, y: '0%', ease: Power4.easeIn})
      tl = new TimelineMax();
      tl.to(el1, 1, {opacity: 0, y: '100%', ease: Power4.easeIn})
        .set(el1, {y: '-100%'})
        .call(()=> { el1.textContent = 0;})
        .to(el1, 1, {opacity: 1, y: '0%', ease: Power4.easeIn})
    }

    if (n == 98) {
      tl = new TimelineMax();
      tl.to(el3, 1, {opacity: 0, y: '100%', ease: Power4.easeIn})
        .set(el3, {y: '-100%'})
        .call(()=> { el3.textContent = '';})
        .to(el3, 1, {opacity: 1, y: '0%', ease: Power4.easeIn})
      tl = new TimelineMax();
      tl.to(el2, 1, {opacity: 0, y: '100%', ease: Power4.easeIn})
        .set(el2, {y: '-100%'})
        .call(()=> { el2.textContent = 9;})
        .to(el2, 1, {opacity: 1, y: '0%', ease: Power4.easeIn})
    }
  })

   //　読み込み時、1回だけ実行させる    
  window.addEventListener('load', ()=> {
    const y = window.pageYOffset;
    const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const n = Math.trunc((y / h) * 100);

    const n1 = Math.floor(n / 1) % 10;
    const n2 = Math.floor(n / 10) % 10;

    el1.textContent = n1;
    el2.textContent = n2;
  }, {once: true})
}

// evangerionアニメーション
const evangelion = ()=> {
  tl = new TimelineMax();
  tl.to('.evangelion', .1, {display: 'block'})
    .to('.evangelion_timeline_01', 2, {display: 'block'})
    .to('.evangelion_timeline_01', .1, {display: 'none'})
    .to('.evangelion_timeline_02', 2, {display: 'block'})
    .to('.evangelion_timeline_02', .1, {display: 'none'})
    .to('.evangelion_timeline_03', 2, {display: 'block'})
    .to('.evangelion_timeline_03', .1, {display: 'none'})
    .to('.evangelion_timeline_04', 3, {display: 'block'})
}

// 実行
shdwAnimation();
scrollNumAnimation();
