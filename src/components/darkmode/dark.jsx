// Darkmode()
export default function Darkmode() {
  document.querySelector(".app")?.classList.add("dark-theme");
  localStorage.setItem("nowadark", "true");
  localStorage.removeItem("nowalighttheme");

  const DarkMenu2 = document.querySelector("#myonoffswitch8"); //dark header
  if (DarkMenu2) {
    DarkMenu2.checked = true;
  }
  const DarkMenu3 = document.querySelector("#myonoffswitch5"); //dark menu
  if (DarkMenu3) {
    DarkMenu3.checked = true;
  }
  document.querySelector("#myonoffswitch2").checked = true;
}
