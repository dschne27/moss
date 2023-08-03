interface Species {
    "id": number,
    "common_name": string,
    "slug": string,
    "scientific_name": string,
    "year": number,
    "bibliography": string,
    "author": string,
    "status": string,
    "rank": string,
    "family_common_name": string,
    "genus_id": number,
    "image_url": null,
    "synonyms": string[],
    "genus": string,
    "family": string,
    "links": {
        "self": string,
        "plant": string,
        "genus": string
    }
}

interface Plant {
    "id": number,
    "common_name": string,
    "slug": string,
    "scientific_name": string,
    "year": number,
    "bibliography": string,
    "author": string,
    "status": string,
    "rank": string,
    "family_common_name": string,
    "genus_id": number,
    "image_url": string,
    "synonyms": string[],
    "genus": string,
    "family": string,
    "links": {
        "self": string,
        "plant": string,
        "genus": string
    }
}

interface Genus {
    "id": number,
    "name": string,
    "slug": string,
    "links": {
        "self": string,
        "plant": string,
        "genus": string,
        "family": string
    }
}

interface Family {
    "id": number,
    "name": string,
    "common_name": string,
    "slug": string,
    "links": {
        "self": string,
        "division_order": string,
        "genus": string
}
}

interface PlantById extends Plant {
    "species": Species[]
    "vegetable": boolean,
    "family": Family,
    "genus": Genus,
}