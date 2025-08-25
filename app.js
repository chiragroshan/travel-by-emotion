const destinations = {
    adventurous: [
        { 
            name: "MANALI", 
            image: "https://images.unsplash.com/photo-1606800052056-3f0ef62fbe59?auto=format&fit=crop&w=900&q=80", 
            link: "https://www.tripadvisor.in/Tourism-g297618-Manali_Kullu_District_Himachal_Pradesh-Vacations.html" 
        },
        { 
            name: "RAJASTHAN DESERT", 
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80", 
            link: "https://www.tripadvisor.in/Tourism-g297665-Rajasthan-Vacations.html" 
        }
    ],
    relaxed: [
        { 
            name: "GOA", 
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80", 
            link: "https://www.tripadvisor.in/Tourism-g297604-Goa-Vacations.html" 
        },
        { 
            name: "KERALA", 
            image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=900&q=80", 
            link: "https://www.tripadvisor.in/Tourism-g297631-Kerala-Vacations.html" 
        }
    ],
    happy: [
        { 
            name: "JAIPUR", 
            image: "https://images.unsplash.com/photo-1582632953228-6e6df98ec7ca?auto=format&fit=crop&w=900&q=80", 
            link: "https://www.tripadvisor.in/Attractions-g304555-Activities-Jaipur_Jaipur_District_Rajasthan.html" 
        },
        { 
            name: "VARANASI", 
            image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80", 
            link: "https://www.tripadvisor.in/Tourism-g297685-Varanasi_Varanasi_District_Uttar_Pradesh-Vacations.html" 
        }
    ],
    romantic: [
        { 
            name: "RISHIKESH", 
            image: "https://images.unsplash.com/photo-1598431656964-153b5cfc246e?auto=format&fit=crop&w=900&q=80", 
            link: "https://www.tripadvisor.in/Tourism-g580106-Rishikesh_Dehradun_District_Uttarakhand-Vacations.html" 
        }
    ],
    spiritual: [
        { 
            name: "VARANASI", 
            image: "https://images.unsplash.com/photo-1524492449090-1a9f3d1a5d48?auto=format&fit=crop&w=900&q=80", 
            link: "https://www.tripadvisor.in/Tourism-g297685-Varanasi_Varanasi_District_Uttar_Pradesh-Vacations.html" 
        },
        { 
            name: "RISHIKESH", 
            image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=900&q=80", 
            link: "https://www.tripadvisor.in/Tourism-g580106-Rishikesh_Dehradun_District_Uttarakhand-Vacations.html" 
        }
    ],
    thoughtful: [
        { 
            name: "KASHMIR", 
            image: "https://images.unsplash.com/photo-1618828669526-b2b63a64a6b8?auto=format&fit=crop&w=900&q=80", 
            link: "https://www.tripadvisor.in/Tourism-g297621-Kashmir-Jammu_and_Kashmir-Vacations.html" 
        },
        { 
            name: "HIMACHAL PRADESH", 
            image: "https://images.unsplash.com/photo-1634141521551-7d38e4e7e8d8?auto=format&fit=crop&w=900&q=80", 
            link: "https://www.tripadvisor.in/Tourism-g297617-Himachal_Pradesh-Vacations.html" 
        }
    ]
};

function suggestDestination() {
    const emotion = document.getElementById("emotion").value;
    const result = document.getElementById("result");
    result.innerHTML = '';

    if (!emotion) return alert("Please select a mood!");
    if (!destinations[emotion]) return;

    destinations[emotion].forEach(place => {
        const card = document.createElement('a');
        card.className = 'destination-card';
        card.href = place.link;
        card.target = "_blank";
        card.innerHTML = `
            <div class="card-image">
                <img src="${place.image}" alt="${place.name}">
            </div>
            <div class="card-content">
                <h3>${place.name}</h3>
                <p>Click to explore ${place.name}</p>
            </div>
        `;
        result.appendChild(card);
    });

    result.scrollIntoView({ behavior: 'smooth' });
}
