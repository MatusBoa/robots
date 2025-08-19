import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ClientReadableStream } from "@grpc/grpc-js"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useGrpcStream<T>(stream: ClientReadableStream<T>): Promise<T[]> {
    return new Promise(
        (resolve, reject) => {
            const items: T[] = []

            stream.on('data', (data) => {
                items.push(data)
            })

            stream.on('end', () => {
                resolve(items)
            })

            stream.on('error', (err) => {
                reject(err)
            })
        }
    )
}

export function useGrpcService() {

}