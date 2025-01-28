import { useQuery } from "@tanstack/react-query";
import fetchTranslations from "../services/fetchTranslations";
import { useEffect } from "react";

const useFetchTranslations = (locale: string) => {

    const { data } = useQuery({
        queryKey: ['get-translations', locale],
        queryFn: () => fetchTranslations(locale)
    });

    useEffect(() => {
        console.log(data)
    }, [data])

    return {
        translationList: data
    }
}

export default useFetchTranslations;