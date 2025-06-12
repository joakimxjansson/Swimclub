export async function getGlobalData() {
    const res = await fetch("http://strapi:1338/api/global?populate[Navbar][populate]=Logo&populate[Footer][populate][Sponsors][populate]=Sponsorimage", {
        headers: {
            "Content-Type": "application/json",
        },

    });

    if (!res.ok) throw new Error("Failed to fetch homepage data");
    console.log("log",res.body);

    const json = await res.json();
    return json.data;
}

export async function getHomepageData() {
    const res = await fetch("http://strapi:1338/api/homepage?populate=Team.Employees.Employeeavatar&populate=Education&populate=Gallery.Image&populate=Contact.Contactinfo", {
        headers: {
            "Content-Type": "application/json",
        },

    });

    if (!res.ok) throw new Error("Failed to fetch homepage data");
    console.log("log",res.body);

    const json = await res.json();
    return json.data;
}

export async function getLatestNews() {
    const res = await fetch("http://strapi:1338/api/newsid?populate=image", {
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) throw new Error("Failed to fetch latest news");

    const json = await res.json();
    return json.data;
}

export async function getNewsBySlug(slug: string) {
    const res = await fetch(`http://strapi:1338/api/newsid?filters[link][$eq]=${slug}&populate=image`)
    const json = await res.json()
    return json.data[0] // Strapi returnerar alltid en array vid filter
}




    export async function getAboutpageData() {
        const res = await fetch("http://strapi:1338/api/about?populate=*", {
            headers: {
                "Content-Type": "application/json",
            },

        });

        if (!res.ok) throw new Error("Failed to fetch homepage data");
        console.log("log",res.body);

        const json = await res.json();
        return json.data;
    }
