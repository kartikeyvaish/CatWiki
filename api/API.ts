import env from "../config/env";

const apiKey = env.catwikiapikey ?? "";

const headers = {
    headers: {
        "x-api-key": apiKey,
    }
}

// API call to get breeds
export async function getBreeds() {
    try {
        const getBreedsResponse = await fetch(`https://api.thecatapi.com/v1/breeds?limit=4`, headers);

        const jsonResponse = await getBreedsResponse.json();

        // map and create an array of breed objects
        const breeds = jsonResponse.map(breed => {
            return {
                name: breed.name,
                id: breed.id,
                url: breed.image.url
            }
        }
        );


        return { ok: true, data: breeds }
    } catch (error) {
        return { ok: false, error: error }
    }
}

// API call to search for a breed
export async function searchBreed(query: string) {
    try {
        const searchBreedResponse = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, headers);

        const jsonResponse = await searchBreedResponse.json();

        // map and create an array of breed objects
        const breeds = jsonResponse.map(breed => {
            return {
                name: breed.name,
                id: breed.id,
            }
        }
        );

        return { ok: true, data: breeds }
    } catch (error) {
        return { ok: false, error: error }
    }
}

// get breed details
export async function getBreedDetails(id: string) {
    try {
        const getBreedDetailsResponse = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`, headers);

        const jsonResponse = await getBreedDetailsResponse.json();

        // Loop over the breeds array and get details of the breed which matches the id
        for (let i = 0; i < jsonResponse.length; i++) {
            if (jsonResponse[i].breeds[i].id === id) {
                const breedObj = jsonResponse[i].breeds[i];

                return {
                    ok: true, data: {
                        name: breedObj.name,
                        description: breedObj.description,
                        temperament: breedObj.temperament,
                        origin: breedObj.origin,
                        life_span: breedObj.life_span,
                        adaptability: breedObj.adaptability,
                        affection_level: breedObj.affection_level,
                        child_friendly: breedObj.child_friendly,
                        grooming: breedObj.grooming,
                        intelligence: breedObj.intelligence,
                        health_issues: breedObj.health_issues,
                        social_needs: breedObj.social_needs,
                        stranger_friendly: breedObj.stranger_friendly,
                        uri: jsonResponse[i].url,
                        found: true
                    }
                }
            }
        }

        return { ok: false }
    } catch (error) {
        return { ok: false, error: error }
    }
}