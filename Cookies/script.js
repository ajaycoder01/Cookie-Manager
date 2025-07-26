
    function setCookie() {
      const name = document.getElementById("cookieName").value.trim();
      const value = document.getElementById("cookieValue").value.trim();
      const output = document.getElementById("outputBox");

      if (!name || !value) {
        alert("Please enter both cookie name and value.");
        return;
      }

      const expiry = new Date();
      expiry.setTime(expiry.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days
      document.cookie = name + "=" + value + ";expires=" + expiry.toUTCString() + ";path=/";
      output.innerText = `✅ Cookie "${name}" set successfully!`;
    }

    function getCookie() {
      const name = document.getElementById("cookieName").value.trim();
      const output = document.getElementById("outputBox");

      if (!name) {
        alert("Please enter a cookie name.");
        return;
      }

      const cookies = document.cookie.split(";");

      for (let c of cookies) {
        let [key, value] = c.trim().split("=");
        if (key === name) {
          output.innerText = `🍪 Cookie value: ${value}`;
          return;
        }
      }

      output.innerText = `❌ Cookie "${name}" not found.`;
    }

    function deleteCookie() {
      const name = document.getElementById("cookieName").value.trim();
      const output = document.getElementById("outputBox");

      if (!name) {
        alert("Please enter a cookie name to delete.");
        return;
      }

      document.cookie = name + "=;expires=Thu, 01 Jan 1980 00:00:00 GMT;path=/";
      output.innerText = `🗑🗑Cookie "${name}" deleted successfully!`;
    }

    function showAllCookies() {
      const output = document.getElementById("outputBox");
      const cookies = document.cookie;

      if (!cookies) {
        output.innerText = "⚠️ No cookies found.";
        return;
      }

      // Format nicely:
      const cookieArray = cookies.split(";").map(c => "🔹 " + c.trim()).join("\n");
      output.innerText = "📃 All Cookies:\n" + cookieArray;
    }
