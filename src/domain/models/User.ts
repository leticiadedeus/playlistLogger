import { Entity } from "../../shared/domain/Entity"

export interface UserProps {
    nomeUsuario: string
    nome: string
    senha: string
    dataCriacao: Date
}

export class User extends Entity<UserProps> {
    private constructor(props: UserProps, id?: string) {
        super(props, id)
    }

    static create(props: UserProps): User {
        const user = new User(props)

        return user
    }

    static validade(user: User): boolean {
        if (user.props.nome.length > 128) {
            return false
        }

        return true
    }
}
