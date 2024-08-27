import app from 'apprun';

const toggleSidebar = () => {

  const sidebar = document.getElementById('sidebar');
  const icon = document.querySelector('#toggleSidebar i');

  if (sidebar.style.width === '70px') {
    sidebar.style.width = '200px';
    sidebar.style.minWidth = '200px';
    icon.classList.remove('fa-chevron-right');
    icon.classList.add('fa-chevron-left');
    document.querySelectorAll('#sidebar ul li span').forEach(function (span: HTMLSpanElement) {
      span.style.display = 'inline';
    });
  } else {
    sidebar.style.width = '70px';
    sidebar.style.minWidth = '70px';
    icon.classList.remove('fa-chevron-left');
    icon.classList.add('fa-chevron-right');
    document.querySelectorAll('#sidebar ul li span').forEach(function (span: HTMLSpanElement) {
      span.style.display = 'none';
    });
  }
};

const toggleDarkMode = () => {
  const htmlElement = document.documentElement;
  const icon = document.getElementById('themeIcon');
  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    htmlElement.classList.add('dark');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
}

app.on('//', (p) => {
  document.querySelectorAll('#sidebar ul li').forEach(function (li: HTMLLIElement) {
    li.classList.remove('bg-gray-300', 'dark:bg-gray-600');
    if (li.querySelector('a').getAttribute('href') === p) {
      li.classList.add('bg-gray-300', 'dark:bg-gray-600');
    }
  });
})

if (typeof window !== 'undefined') {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export default () => {
  window['app-element'] = 'my-app';
  return <div class="flex h-screen">
    <div id="sidebar" class="flex justify-between flex-col bg-gray-200 transition-all duration-300 ease-in-out dark:bg-gray-800 dark:text-white" style="width: 200px; min-width:200px">
      <div class="grow mt-3">
        <div class="p-4">
          <div class="text-lg font-semibold">Logo</div>
        </div>
        <ul id="menus">
          <li class="p-6 h-6 flex items-center whitespace-nowrap">
            <a href="/">
              <i class="fas fa-home"></i>
              <span class="inline-block mx-2">Home</span>
            </a>
          </li>
          <li class="p-6 h-6 flex items-center whitespace-nowrap">
            <a href="/about">
              <i class="fas fa-user"></i>
              <span class="inline-block mx-2">About</span>
            </a>
          </li>
          <li class="p-6 h-6 flex items-center whitespace-nowrap">
            <a href="/contact">
              <i class="fas fa-phone"></i>
              <span class="inline-block mx-2">Contact</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="p-4">
        <button id="toggleSidebar" class="p-2"
          onclick={toggleSidebar}>
          <i class="fas fa-chevron-left"></i>
        </button>
      </div>
    </div>

    <div class="grow flex flex-col bg-gray-300 dark:bg-gray-600 dark:text-white">

      <nav class="bg-white border-gray-200 dark:bg-gray-800">
        <div class="max-w-screen-xl flex flex-nowrap justify-between mx-auto p-4">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AppRun Flowbite</span>
          </a>

          <div class="flex">
            <div class="relative hidden md:block">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
            <button id="toggleDarkMode" class="ml-2 text-gray-500 dark:text-gray-400 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
              onclick={toggleDarkMode}>
              <i id="themeIcon" class="fas fa-moon"></i>
            </button>
          </div>

        </div>
      </nav>


      <div class="grow flex p-2 bg-white dark:bg-gray-600 dark:text-white">
        <div class="grow p-4" id="my-app"></div>
      </div>
    </div>
  </div>
};
