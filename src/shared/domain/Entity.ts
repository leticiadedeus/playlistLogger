export abstract class Entity<T> {
    protected _id: string | undefined
    protected props: T

    get id (): string | undefined {
        return this._id
    }

    set id (id: string | undefined) {
        this._id = id
    }

    constructor(props: T, id?: string) {
        this._id = id ? id : undefined
        this.props = props
    }
}