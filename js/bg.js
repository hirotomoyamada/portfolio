// bgアニメーション
const c = document.getElementById("bg");
const ctx = c.getContext("2d");

const bgAnimation = ()=> {

  // 格納される配列
  const animations = [];
  const circles = [];

  // 取得した値
  let cH;
  let cW;

  // 初期カラー
  let bgColor = "#FFF";

  // カラーのローテーション
  const colorPicker = (()=> {
    let index = 0;
    // カラーの格納
    const colors = ["#f5b400", "#4285f5",　"#119d59", "#db4538"];

    const next = ()=> {
      index = index++ < colors.length-1 ? index : 0;
      return colors[index];
    }

    const current = ()=> {
      return colors[index]
    }

    return {
      next: next,
      current: current
    }
  })();

  const Circle = function(opts) {
    extend(this, opts);
  }

  const extend = (a, b)=> {
    for(let key in b) {
      if(b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  // サークルを定義
  Circle.prototype.draw = function() {
    ctx.globalAlpha = this.opacity || 1;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    if (this.stroke) {
      ctx.strokeStyle = this.stroke.color;
      ctx.lineWidth = this.stroke.width;
      ctx.stroke();
    }
    if (this.fill) {
      ctx.fillStyle = this.fill;
      ctx.fill();
    }
    ctx.closePath();
    ctx.globalAlpha = 1;
  }

  // 配列のアニメーションを実行
  const animate = anime({
    duration: Infinity,
    update: ()=> {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, cW, cH);
      animations.forEach((anim)=> {
        anim.animatables.forEach((animatable)=> {
          animatable.target.draw();
        });
      });
    }
  });

  // 配列のアニメーションを削除
  const removeAnimation = (animation)=> {
    const index = animations.indexOf(animation);
    if (index > -1) animations.splice(index, 1);
  }


  // イベント内容
  const handleEvent = (e)=> {

    const currentColor = colorPicker.current();
    const nextColor = colorPicker.next();
    const targetR = calcPageFillRadius(e.clientX, e.clientY);
    const rippleSize = Math.min(200, (cW * .4));
    const minCoverDuration = 750;
      
    // 本体のエフェクト
    const ripple = new Circle({
      x: e.clientX,
      y: e.clientY,
      r: 0,
      fill: currentColor,
      stroke: {
        width: 3,
        color: currentColor
      },
      opacity: 1
    });
    const rippleAnimation = anime({
      targets: ripple,
      r: rippleSize,
      opacity: 0,
      easing: "easeOutExpo",
      duration: 900,
      complete: removeAnimation
    });

    // 拡大するエフェクト
    const pageFill = new Circle({
      x: e.clientX,
      y: e.clientY,
      r: 0,
      fill: nextColor
    });
    const fillAnimation = anime({
      targets: pageFill,
      r: targetR,
      duration:  Math.max(targetR / 2 , minCoverDuration ),
      easing: "easeOutQuart",
      complete: ()=> {
        bgColor = pageFill.fill;
        removeAnimation(fillAnimation);
      }
    });
    
    // 周りのエフェクト
    const particles = [];
    for (let i = 0; i < 36; i++) {
      const particle = new Circle({
        x: e.clientX,
        y: e.clientY,
        fill: currentColor,
        r: anime.random(24, 48)
      })
      particles.push(particle);
    }
    const particlesAnimation = anime({
      targets: particles,
      x: (particle)=> {
        return particle.x + anime.random(rippleSize, -rippleSize);
      },
      y: (particle)=> {
        return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
      },
      r: 0,
      easing: "easeOutExpo",
      duration: anime.random(1000,1300),
      complete: removeAnimation
    });

    // 配列に格納
    animations.push(fillAnimation, rippleAnimation, particlesAnimation);
    
  }

  // 画面の平方根を返す
  const calcPageFillRadius = (x, y)=> {
    const l = Math.max(x - 0, cW - x);
    const h = Math.max(y - 0, cH - y);
    return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
  }

  // リサイズ処理
  const resizeCanvas = ()=> {
    cW = window.innerWidth;
    cH = window.innerHeight;
    c.width = cW * devicePixelRatio;
    c.height = cH * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);
  };

  // イベントの作成
  const addEvent = ()=> {
    document.addEventListener("click", handleEvent);
  };


  // スタートアニメーション作成
  const startFauxClicking = ()=> {
    fauxClick(anime.random( cW * .2, cW * .8), anime.random(cH * .2, cH * .8));
    startFauxClicking();
  }
  const fauxClick = (x, y)=> {
    const fauxClick = new Event("click");
    fauxClick.clientX = x;
    fauxClick.clientY = y;
    document.dispatchEvent(fauxClick);
  }

  // スタートアニメーション実行
  const handleInactiveUser = ()=> {
    const inactive = setTimeout(()=> {
      fauxClick(cW/2, cH/2);
    }, 100);
    
    function clearInactiveTimeout() {
      clearTimeout(inactive);
      document.removeEventListener("click", clearInactiveTimeout);
    }
  
    document.addEventListener("click", clearInactiveTimeout);
  }

  // リサイズ実行
  (function init() {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    addEvent();
    handleInactiveUser();
    c.classList.add('started');
  })();
}

// bgアニメーション制御
const startedBgAnimation = ()=> {
  if (!c.classList.contains('started')) {
    bgAnimation();
  }
}
