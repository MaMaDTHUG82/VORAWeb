import "./menu.css";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean;
}

interface MenuCategory {
  id: string;
  title: string;
  englishTitle: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    id: "hot-drinks",
    title: "نوشیدنی گرم",
    englishTitle: "HOT DRINKS",
    items: [
      {
        name: "هات چاکلت",
        description: "شکلات داغ، شیر و فوم شیر",
        price: "۲۲۰,۰۰۰ تومان",
        image: "hot-chocolate",
        popular: true,
      },
      {
        name: "چای ماسالا",
        description: "چای، شیر و ترکیب ادویه‌های معطر",
        price: "۱۹۰,۰۰۰ تومان",
        image: "masala-tea",
      },
      {
        name: "چای سیاه",
        description: "چای سیاه ایرانی با عطر دلنشین",
        price: "۱۲۰,۰۰۰ تومان",
        image: "black-tea",
      },
      {
        name: "چای سبز",
        description: "چای سبز با طعمی سبک و تازه",
        price: "۱۳۵,۰۰۰ تومان",
        image: "green-tea",
      },
    ],
  },

  {
    id: "cold-drinks",
    title: "نوشیدنی سرد",
    englishTitle: "COLD DRINKS",
    items: [
      {
        name: "لیموناد VORA",
        description: "لیمو تازه، سیروپ مخصوص و یخ",
        price: "۲۱۰,۰۰۰ تومان",
        image: "lemonade",
        popular: true,
      },
      {
        name: "آیس تی",
        description: "چای سرد، لیمو و نعناع تازه",
        price: "۱۸۵,۰۰۰ تومان",
        image: "ice-tea",
      },
      {
        name: "موهیتو",
        description: "لیمو، نعناع تازه و سودا",
        price: "۲۲۰,۰۰۰ تومان",
        image: "mojito",
      },
      {
        name: "اسموتی توت‌فرنگی",
        description: "توت‌فرنگی تازه و ترکیب مخصوص VORA",
        price: "۲۴۰,۰۰۰ تومان",
        image: "strawberry",
      },
    ],
  },

  {
    id: "burgers",
    title: "همبرگرها",
    englishTitle: "BURGERS",
    items: [
      {
        name: "برگر VORA",
        description: "گوشت گریل شده، پنیر گودا، پیاز و سس مخصوص",
        price: "۳۹۵,۰۰۰ تومان",
        image: "vora-burger",
        popular: true,
      },
      {
        name: "چیزبرگر",
        description: "گوشت گریل شده، پنیر چدار، خیارشور و سس مخصوص",
        price: "۴۱۵,۰۰۰ تومان",
        image: "cheeseburger",
      },
      {
        name: "برگر دودی",
        description: "گوشت گریل شده، پنیر، پیاز کاراملی و سس دودی",
        price: "۴۳۵,۰۰۰ تومان",
        image: "smoked-burger",
      },
    ],
  },

  {
    id: "sandwiches",
    title: "ساندویچ‌ها",
    englishTitle: "SANDWICHES",
    items: [
      {
        name: "ساندویچ مرغ گریل",
        description: "مرغ گریل شده، پنیر، سبزیجات و سس مخصوص",
        price: "۳۴۵,۰۰۰ تومان",
        image: "chicken-sandwich",
      },
      {
        name: "چاباتا بیف",
        description: "گوشت گوساله، پنیر، قارچ و سس مخصوص",
        price: "۴۲۵,۰۰۰ تومان",
        image: "beef-ciabatta",
        popular: true,
      },
      {
        name: "ساندویچ مرغ پستو",
        description: "مرغ گریل، سس پستو، پنیر گودا و سبزیجات",
        price: "۳۶۵,۰۰۰ تومان",
        image: "pesto-chicken",
      },
    ],
  },

  {
    id: "coffee",
    title: "قهوه‌ها",
    englishTitle: "COFFEE",
    items: [
      {
        name: "اسپرسو",
        description: "شات اسپرسو با رُست اختصاصی VORA",
        price: "۱۵۰,۰۰۰ تومان",
        image: "espresso",
      },
      {
        name: "آمریکانو",
        description: "اسپرسو و آب داغ",
        price: "۱۶۵,۰۰۰ تومان",
        image: "americano",
      },
      {
        name: "کاپوچینو",
        description: "اسپرسو، شیر بخار داده شده و فوم شیر",
        price: "۱۸۵,۰۰۰ تومان",
        image: "cappuccino",
        popular: true,
      },
      {
        name: "لاته",
        description: "اسپرسو و شیر بخار داده شده",
        price: "۱۹۵,۰۰۰ تومان",
        image: "latte",
      },
      {
        name: "موکا",
        description: "اسپرسو، شکلات و شیر",
        price: "۲۱۵,۰۰۰ تومان",
        image: "mocha",
      },
    ],
  },

  {
    id: "desserts",
    title: "دسرها",
    englishTitle: "DESSERTS",
    items: [
      {
        name: "چیزکیک",
        description: "چیزکیک کلاسیک با سس مخصوص VORA",
        price: "۲۱۵,۰۰۰ تومان",
        image: "cheesecake",
        popular: true,
      },
      {
        name: "براونی شکلاتی",
        description: "براونی شکلاتی با بافت نرم و شکلات تلخ",
        price: "۱۹۵,۰۰۰ تومان",
        image: "brownie",
      },
      {
        name: "تیرامیسو",
        description: "لایه‌های ماسکارپونه، قهوه و بیسکویت",
        price: "۲۲۵,۰۰۰ تومان",
        image: "tiramisu",
      },
    ],
  },
];

function createMenuItem(item: MenuItem): string {
  return `
    <article class="menu-item">

      <div class="menu-item-image menu-image-${item.image}">
        ${item.popular
      ? `<span class="menu-item-badge">پیشنهاد VORA</span>`
      : ""
    }
      </div>

      <div class="menu-item-content">

        <div class="menu-item-top">

          <div>
            <h3>${item.name}</h3>

            <p>
              ${item.description}
            </p>
          </div>

          <span class="menu-item-price">
            ${item.price}
          </span>

        </div>

      </div>

    </article>
  `;
}

function createCategory(category: MenuCategory): string {
  return `
    <section
      class="menu-category"
      id="${category.id}"
    >

      <div class="menu-category-header">

        <div class="menu-category-title">

          <span class="menu-category-number">
            ${String(
    menuCategories.indexOf(category) + 1
  ).padStart(2, "0")}
          </span>

          <div>
            <span class="menu-category-en">
              ${category.englishTitle}
            </span>

            <h2>
              ${category.title}
            </h2>
          </div>

        </div>

        <span class="menu-category-line"></span>

      </div>

      <div class="menu-items">
        ${category.items.map(createMenuItem).join("")}
      </div>

    </section>
  `;
}

export function renderMenu(): string {
  return `
    <div class="menu-page">

      <!-- ================= MENU HERO ================= -->

      <section class="menu-hero">

        <div class="menu-hero-background"></div>

        <div class="menu-hero-overlay"></div>

        <div class="container menu-hero-content">

          <img
            src="Logo1.png"
            alt="VORA"
            class="vora-logo"
          >

          <p>
            انتخاب کن، سفارش بده و از لحظه‌ات لذت ببر.
          </p>

        </div>

      </section>


      <!-- ================= CATEGORY NAV ================= -->

      <section class="menu-navigation">

        <div class="container">

          <div class="menu-navigation-inner">

            ${menuCategories
      .map(
        (category) => `
                  <a href="#${category.id}">
                    ${category.title}
                  </a>
                `
      )
      .join("")}

          </div>

        </div>

      </section>


      <!-- ================= MENU ================= -->

      <main class="menu-content">

        <div class="container">

          ${menuCategories.map(createCategory).join("")}

        </div>

      </main>

    </div>
  `;
}