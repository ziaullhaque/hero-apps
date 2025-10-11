import Swal from "sweetalert2";

export const loadInstall = () => {
  try {
    const data = localStorage.getItem("installedApps");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const updatedApps = (app) => {
  const installedApps = loadInstall();
  try {
    const isDuplicate = installedApps.find((a) => a.id === app.id);
    if (isDuplicate) {
      return alert("already app installed");
    }

    const updatedInstalledApps = [...installedApps, app];
    localStorage.setItem("installedApps", JSON.stringify(updatedInstalledApps));
  } catch (error) {
    console.error("Error updating apps:", error);
  }
};

export const uninstalledAppsFromInstalled = (id) => {
  console.log(id);

  const installedApps = loadInstall();
  console.log(installedApps);
  try {
    const updatedInstalledApps = installedApps.filter((a) => a.id !== id);
    console.log(updatedInstalledApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedInstalledApps));
  } catch (error) {
    console.log(error);
    return [];
  }
};
