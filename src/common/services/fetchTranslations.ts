const fetchTranslations = async (locale: string) => {

        const res = await fetch('/locale/navbar/en.json')
        return res.json();
}

export default fetchTranslations;