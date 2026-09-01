import "./main.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App element was not found.");
}

app.innerHTML = `
  <!-- ================= HEADER ================= -->

  <header class="site-header">
    <div class="container header-inner">

      <a href="#" class="logo">
          <img
            src="Logo1.png"
            alt="VORA"
            class="logo-image"
          >
       </a>

      <nav class="main-nav">
        <a href="#home" class="active">خانه</a>
        <a href="#menu">منو</a>
        <a href="#about">درباره ما</a>
        <a href="#gallery">گالری</a>
        <a href="#contact">تماس با ما</a>
      </nav>

      <a href="/menu.html" class="header-button">
        مشاهده منو
        <span>↗</span>
      </a>

      <button
        class="mobile-menu-button"
        type="button"
        aria-label="باز کردن منو"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>
  </header>


  <main>

    <!-- ================= HERO ================= -->

    <section class="hero" id="home">

      <div class="hero-background"></div>

      <div class="hero-overlay"></div>

      <div class="container hero-content">

        <div class="hero-text">

          <span class="eyebrow">
            VORA CAFE & RESTAURANT
          </span>

          <h1>
            یک مکث
            <span>برای خودت.</span>
          </h1>

          <p>
            جایی برای قهوه، غذا، گفت‌وگو و لحظه‌هایی
            که ارزش ماندن دارند.
          </p>

          <div class="hero-actions">

            <a href="#menu" class="button button-primary">
              مشاهده منو
              <span>←</span>
            </a>

            <a href="#about" class="button button-outline">
              درباره VORA
            </a>

          </div>

        </div>


        <div class="hero-badge">

          <span class="badge-line"></span>

          <span>
            GOOD
            <br>
            MOMENTS
          </span>

        </div>

      </div>


      <div class="hero-bottom">

        <div class="container hero-bottom-inner">

          <span>
            قهوه • غذا • تجربه
          </span>

          <span class="scroll-indicator">
            اسکرول کنید
            <span>↓</span>
          </span>

        </div>

      </div>

    </section>


    <!-- ================= INTRO ================= -->

    <section class="intro-section">

      <div class="container intro-grid">

        <div class="section-label">
          <span>01</span>
          <span>VORA</span>
        </div>

        <div class="intro-content">

          <span class="eyebrow orange">
            خوش آمدید به VORA
          </span>

          <h2>
            بیشتر از یک
            <span>کافه.</span>
          </h2>

          <p>
            VORA جایی است برای فرار کوتاه از شلوغی روز.
            از اولین فنجان قهوه صبح تا یک شام آرام،
            همه‌چیز برای ساختن یک تجربه متفاوت طراحی شده است.
          </p>

          <a href="#about" class="text-link">
            داستان VORA
            <span>←</span>
          </a>

        </div>

      </div>

    </section>


    <!-- ================= CATEGORIES ================= -->

    <section class="categories-section">

      <div class="container">

        <div class="section-heading">

          <div>
            <span class="eyebrow orange">
              انتخاب شما
            </span>

            <h2>
              برای هر <span>لحظه</span>
            </h2>
          </div>

          <p>
            چیزی برای هر سلیقه و هر زمانی از روز.
          </p>

        </div>


        <div class="category-grid">

          <a href="#menu" class="category-card category-large">

            <div class="category-image coffee-image"></div>

            <div class="category-overlay"></div>

            <div class="category-content">

              <span>01</span>

              <h3>قهوه</h3>

              <p>
                اسپرسو، قهوه‌های دمی و انتخاب‌های ویژه VORA
              </p>

              <strong>
                مشاهده
                <span>←</span>
              </strong>

            </div>

          </a>


          <a href="#menu" class="category-card">

            <div class="category-image food-image"></div>

            <div class="category-overlay"></div>

            <div class="category-content">

              <span>02</span>

              <h3>غذا</h3>

              <p>
                طعم‌هایی برای یک وعده کامل
              </p>

              <strong>
                مشاهده
                <span>←</span>
              </strong>

            </div>

          </a>


          <a href="#menu" class="category-card">

            <div class="category-image dessert-image"></div>

            <div class="category-overlay"></div>

            <div class="category-content">

              <span>03</span>

              <h3>دسر</h3>

              <p>
                شیرین‌تر کردن لحظه‌ها
              </p>

              <strong>
                مشاهده
                <span>←</span>
              </strong>

            </div>

          </a>

        </div>

      </div>

    </section>


    <!-- ================= FEATURED MENU ================= -->

    <section class="menu-section" id="menu">

      <div class="container">

        <div class="section-heading menu-heading">

          <div>

            <span class="eyebrow orange">
              پیشنهاد VORA
            </span>

            <h2>
              طعم‌هایی که
              <span>باید امتحان کنید.</span>
            </h2>

          </div>

          <a href="/menu.html" class="text-link">
            مشاهده منوی کامل
            <span>←</span>
          </a>

        </div>


        <div class="menu-grid">

          <article class="menu-card">

            <div class="menu-card-image coffee-card-image">

              <span class="menu-tag">
                محبوب
              </span>

            </div>

            <div class="menu-card-content">

              <div class="menu-card-title">

                <h3>لاته VORA</h3>

                <span>۱۸۵,۰۰۰</span>

              </div>

              <p>
                اسپرسو، شیر بخار داده شده و فوم نرم
              </p>

            </div>

          </article>


          <article class="menu-card">

            <div class="menu-card-image burger-card-image">

              <span class="menu-tag">
                پیشنهاد ما
              </span>

            </div>

            <div class="menu-card-content">

              <div class="menu-card-title">

                <h3>برگر VORA</h3>

                <span>۳۹۵,۰۰۰</span>

              </div>

              <p>
                گوشت تازه، پنیر، سبزیجات و سس مخصوص
              </p>

            </div>

          </article>


          <article class="menu-card">

            <div class="menu-card-image dessert-card-image"></div>

            <div class="menu-card-content">

              <div class="menu-card-title">

                <h3>چیزکیک</h3>

                <span>۲۱۵,۰۰۰</span>

              </div>

              <p>
                چیزکیک کلاسیک با سس مخصوص VORA
              </p>

            </div>

          </article>

        </div>

      </div>

    </section>


    <!-- ================= ABOUT ================= -->

    <section class="about-section" id="about">

      <div class="container about-grid">

        <div class="about-image">

          <div class="about-image-overlay"></div>

          <span class="about-image-text">
            VORA
          </span>

        </div>


        <div class="about-content">

          <span class="eyebrow orange">
            درباره ما
          </span>

          <h2>
            اینجا قرار نیست
            <span>عجله کنید.</span>
          </h2>

          <p>
            ما VORA را ساختیم تا جایی داشته باشید که
            بتوانید چند ساعت از سرعت زندگی فاصله بگیرید.
          </p>

          <p>
            قهوه خوب، غذای درست و فضایی که باعث شود
            دوباره بخواهید برگردید.
          </p>

          <a href="#contact" class="button button-primary">
            با ما آشنا شوید
            <span>←</span>
          </a>

        </div>

      </div>

    </section>


    <!-- ================= GALLERY ================= -->

    <section class="gallery-section" id="gallery">

      <div class="container">

        <div class="section-heading">

          <div>

            <span class="eyebrow orange">
              فضای VORA
            </span>

            <h2>
              یک نگاه
              <span>نزدیک‌تر.</span>
            </h2>

          </div>

        </div>


        <div class="gallery-grid">

          <div class="gallery-item gallery-large"></div>

          <div class="gallery-item gallery-small gallery-two"></div>

          <div class="gallery-item gallery-small gallery-three"></div>

          <div class="gallery-item gallery-medium gallery-four"></div>

        </div>

      </div>

    </section>


    <!-- ================= CONTACT ================= -->

    <section class="contact-section" id="contact">

      <div class="container contact-container">

        <div>

          <span class="eyebrow orange">
            منتظر شما هستیم
          </span>

          <h2>
            بیایید یک
            <span>لحظه خوب</span>
            بسازیم.
          </h2>

        </div>


        <div class="contact-info">

          <div>
            <span>آدرس</span>
            <strong>
              تهران، خیابان مثال، پلاک ۲۴
            </strong>
          </div>

          <div>
            <span>ساعات کاری</span>
            <strong>
              هر روز — ۹:۰۰ تا ۲۳:۳۰
            </strong>
          </div>

          <div>
            <span>تماس</span>
            <strong>
              ۰۲۱-۱۲۳۴۵۶۷۸
            </strong>
          </div>

        </div>

      </div>

    </section>

  </main>


  <!-- ================= FOOTER ================= -->

  <footer class="site-footer">

    <div class="container footer-inner">

      <div class="footer-brand">

        <a href="#" class="logo">
          <img
            src="Logo1.png"
            alt="VORA"
            class="logo-image"
          >
       </a>

        <p>
          یک مکث برای خودت.
        </p>

      </div>


      <div class="footer-links">

        <a href="#home">خانه</a>
        <a href="#menu">منو</a>
        <a href="#about">درباره ما</a>
        <a href="#gallery">گالری</a>
        <a href="#contact">تماس</a>

      </div>


      <div class="footer-social">

        <a href="#" aria-label="Instagram">
          Instagram
        </a>

      </div>

    </div>


    <div class="container footer-bottom">

      <span>
        © ${new Date().getFullYear()} VORA
      </span>

      <span>
        تمامی حقوق محفوظ است.
      </span>

      <span>
       By MaMaD_THUG
      </span>

    </div>

  </footer>
`;


// ================= MOBILE MENU =================

const mobileButton =
  document.querySelector<HTMLButtonElement>(
    ".mobile-menu-button"
  );

const navigation =
  document.querySelector<HTMLElement>(
    ".main-nav"
  );

mobileButton?.addEventListener("click", () => {
  navigation?.classList.toggle("mobile-open");
  mobileButton.classList.toggle("open");
});


// Close mobile menu after clicking a link

document
  .querySelectorAll<HTMLAnchorElement>(".main-nav a")
  .forEach((link) => {

    link.addEventListener("click", () => {

      navigation?.classList.remove("mobile-open");
      mobileButton?.classList.remove("open");

    });

  });