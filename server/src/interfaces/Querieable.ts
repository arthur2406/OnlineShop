export interface Queriable {
    query(queryString: string): Promise<any[]>
}