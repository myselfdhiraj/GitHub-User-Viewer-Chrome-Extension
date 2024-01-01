    const userData = document.querySelector(".user-data")
    const usernameInput = document.querySelector("#inputusername")
    const submitButton = document.querySelector("#submitBtn")
    const userImg = document.querySelector("img")
    const userName = document.querySelector("#username")
    const Followers = document.querySelector("#followers")
    const Following = document.querySelector("#following")
    const userBio = document.querySelector(".bio")
    const userRepo = document.querySelector("#repolink")
    const userProfile = document.querySelector("#profilelink")

    const fatchUser = (url) => {
        const req = fetch(url)
            .then((res) => {
                return res.json()
            }).then((res) => {
                userImg.src = res.avatar_url;
                userName.innerHTML = res.name;
                Followers.textContent = res.followers;
                Following.textContent = res.following;
                userBio.innerHTML = res.bio;
                userRepo.href = res.repos_url;
                userProfile.href = res.html_url;
            }).catch((err) => {
                 return err
            });


    }

    const submitData = () => {
        if (usernameInput.value != "") {
            const url =
                `https://api.github.com/users/${usernameInput.value}`;

            fatchUser(url);
        } else {
            userData.innerHTML = "Please Wait...."
        }
    }

    submitButton.addEventListener("click",submitData)
