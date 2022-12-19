import IPersonagem, { IPersonagem, IPersonagem, IPersonagem, IPersonagem, IPersonagem }  from "../../models/personagem";
import fetch from "node-fetch";
import { resolve } from "path";
import { rejects } from "assert";

const apiUrl:string = 'http://localhost:3000/personagens'

const promise = <T>(fetchPromise:any):Promise<T> => {
    return new Promise<T>((resolve,reject) => {
        fetchPromise.then((result:any) => {
            result.json().then((jsonResult:any) => {
                resolve(jsonResult as Promise<T>)
            })
        })
        .catch((err:any) => {
            reject(err)
        })
    })
}

const fetchApi = <T>(url:string): Promise<T> => {
    return promise(fetch(url))
}

const getPerson = async (): Promise<IPersonagem[]> => {
    return (await (await fetchApi(apiUrl)))
}

if(require.main === module) {
    (async () => {
        const personagens:IPersonagem[] = await getPerson()
    })().catch((err:any) => {
        console.log(err)
    })
}