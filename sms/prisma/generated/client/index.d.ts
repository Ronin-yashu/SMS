
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model PasswordReset
 * 
 */
export type PasswordReset = $Result.DefaultSelection<Prisma.$PasswordResetPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model StudentAcademicHistory
 * 
 */
export type StudentAcademicHistory = $Result.DefaultSelection<Prisma.$StudentAcademicHistoryPayload>
/**
 * Model Parent
 * 
 */
export type Parent = $Result.DefaultSelection<Prisma.$ParentPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model FeeStructure
 * 
 */
export type FeeStructure = $Result.DefaultSelection<Prisma.$FeeStructurePayload>
/**
 * Model StudentFee
 * 
 */
export type StudentFee = $Result.DefaultSelection<Prisma.$StudentFeePayload>
/**
 * Model FeeInstallment
 * 
 */
export type FeeInstallment = $Result.DefaultSelection<Prisma.$FeeInstallmentPayload>
/**
 * Model FeePayment
 * 
 */
export type FeePayment = $Result.DefaultSelection<Prisma.$FeePaymentPayload>
/**
 * Model Route
 * 
 */
export type Route = $Result.DefaultSelection<Prisma.$RoutePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Schools
 * const schools = await prisma.school.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Schools
   * const schools = await prisma.school.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordReset`: Exposes CRUD operations for the **PasswordReset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResets
    * const passwordResets = await prisma.passwordReset.findMany()
    * ```
    */
  get passwordReset(): Prisma.PasswordResetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentAcademicHistory`: Exposes CRUD operations for the **StudentAcademicHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentAcademicHistories
    * const studentAcademicHistories = await prisma.studentAcademicHistory.findMany()
    * ```
    */
  get studentAcademicHistory(): Prisma.StudentAcademicHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parent`: Exposes CRUD operations for the **Parent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parents
    * const parents = await prisma.parent.findMany()
    * ```
    */
  get parent(): Prisma.ParentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feeStructure`: Exposes CRUD operations for the **FeeStructure** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeeStructures
    * const feeStructures = await prisma.feeStructure.findMany()
    * ```
    */
  get feeStructure(): Prisma.FeeStructureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentFee`: Exposes CRUD operations for the **StudentFee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentFees
    * const studentFees = await prisma.studentFee.findMany()
    * ```
    */
  get studentFee(): Prisma.StudentFeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feeInstallment`: Exposes CRUD operations for the **FeeInstallment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeeInstallments
    * const feeInstallments = await prisma.feeInstallment.findMany()
    * ```
    */
  get feeInstallment(): Prisma.FeeInstallmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feePayment`: Exposes CRUD operations for the **FeePayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeePayments
    * const feePayments = await prisma.feePayment.findMany()
    * ```
    */
  get feePayment(): Prisma.FeePaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.route`: Exposes CRUD operations for the **Route** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.route.findMany()
    * ```
    */
  get route(): Prisma.RouteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    School: 'School',
    PasswordReset: 'PasswordReset',
    Student: 'Student',
    StudentAcademicHistory: 'StudentAcademicHistory',
    Parent: 'Parent',
    Document: 'Document',
    FeeStructure: 'FeeStructure',
    StudentFee: 'StudentFee',
    FeeInstallment: 'FeeInstallment',
    FeePayment: 'FeePayment',
    Route: 'Route'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "school" | "passwordReset" | "student" | "studentAcademicHistory" | "parent" | "document" | "feeStructure" | "studentFee" | "feeInstallment" | "feePayment" | "route"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      PasswordReset: {
        payload: Prisma.$PasswordResetPayload<ExtArgs>
        fields: Prisma.PasswordResetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          findMany: {
            args: Prisma.PasswordResetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          create: {
            args: Prisma.PasswordResetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          createMany: {
            args: Prisma.PasswordResetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          update: {
            args: Prisma.PasswordResetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordReset>
          }
          groupBy: {
            args: Prisma.PasswordResetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      StudentAcademicHistory: {
        payload: Prisma.$StudentAcademicHistoryPayload<ExtArgs>
        fields: Prisma.StudentAcademicHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentAcademicHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentAcademicHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicHistoryPayload>
          }
          findFirst: {
            args: Prisma.StudentAcademicHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentAcademicHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicHistoryPayload>
          }
          findMany: {
            args: Prisma.StudentAcademicHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicHistoryPayload>[]
          }
          create: {
            args: Prisma.StudentAcademicHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicHistoryPayload>
          }
          createMany: {
            args: Prisma.StudentAcademicHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentAcademicHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicHistoryPayload>[]
          }
          delete: {
            args: Prisma.StudentAcademicHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicHistoryPayload>
          }
          update: {
            args: Prisma.StudentAcademicHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicHistoryPayload>
          }
          deleteMany: {
            args: Prisma.StudentAcademicHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentAcademicHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentAcademicHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicHistoryPayload>[]
          }
          upsert: {
            args: Prisma.StudentAcademicHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicHistoryPayload>
          }
          aggregate: {
            args: Prisma.StudentAcademicHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentAcademicHistory>
          }
          groupBy: {
            args: Prisma.StudentAcademicHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentAcademicHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentAcademicHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<StudentAcademicHistoryCountAggregateOutputType> | number
          }
        }
      }
      Parent: {
        payload: Prisma.$ParentPayload<ExtArgs>
        fields: Prisma.ParentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          findFirst: {
            args: Prisma.ParentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          findMany: {
            args: Prisma.ParentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          create: {
            args: Prisma.ParentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          createMany: {
            args: Prisma.ParentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          delete: {
            args: Prisma.ParentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          update: {
            args: Prisma.ParentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          deleteMany: {
            args: Prisma.ParentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          upsert: {
            args: Prisma.ParentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          aggregate: {
            args: Prisma.ParentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParent>
          }
          groupBy: {
            args: Prisma.ParentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParentCountArgs<ExtArgs>
            result: $Utils.Optional<ParentCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      FeeStructure: {
        payload: Prisma.$FeeStructurePayload<ExtArgs>
        fields: Prisma.FeeStructureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeeStructureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeStructurePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeeStructureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeStructurePayload>
          }
          findFirst: {
            args: Prisma.FeeStructureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeStructurePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeeStructureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeStructurePayload>
          }
          findMany: {
            args: Prisma.FeeStructureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeStructurePayload>[]
          }
          create: {
            args: Prisma.FeeStructureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeStructurePayload>
          }
          createMany: {
            args: Prisma.FeeStructureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeeStructureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeStructurePayload>[]
          }
          delete: {
            args: Prisma.FeeStructureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeStructurePayload>
          }
          update: {
            args: Prisma.FeeStructureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeStructurePayload>
          }
          deleteMany: {
            args: Prisma.FeeStructureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeeStructureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeeStructureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeStructurePayload>[]
          }
          upsert: {
            args: Prisma.FeeStructureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeStructurePayload>
          }
          aggregate: {
            args: Prisma.FeeStructureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeeStructure>
          }
          groupBy: {
            args: Prisma.FeeStructureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeeStructureGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeeStructureCountArgs<ExtArgs>
            result: $Utils.Optional<FeeStructureCountAggregateOutputType> | number
          }
        }
      }
      StudentFee: {
        payload: Prisma.$StudentFeePayload<ExtArgs>
        fields: Prisma.StudentFeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentFeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentFeePayload>
          }
          findFirst: {
            args: Prisma.StudentFeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentFeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentFeePayload>
          }
          findMany: {
            args: Prisma.StudentFeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentFeePayload>[]
          }
          create: {
            args: Prisma.StudentFeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentFeePayload>
          }
          createMany: {
            args: Prisma.StudentFeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentFeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentFeePayload>[]
          }
          delete: {
            args: Prisma.StudentFeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentFeePayload>
          }
          update: {
            args: Prisma.StudentFeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentFeePayload>
          }
          deleteMany: {
            args: Prisma.StudentFeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentFeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentFeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentFeePayload>[]
          }
          upsert: {
            args: Prisma.StudentFeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentFeePayload>
          }
          aggregate: {
            args: Prisma.StudentFeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentFee>
          }
          groupBy: {
            args: Prisma.StudentFeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentFeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentFeeCountArgs<ExtArgs>
            result: $Utils.Optional<StudentFeeCountAggregateOutputType> | number
          }
        }
      }
      FeeInstallment: {
        payload: Prisma.$FeeInstallmentPayload<ExtArgs>
        fields: Prisma.FeeInstallmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeeInstallmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInstallmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeeInstallmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInstallmentPayload>
          }
          findFirst: {
            args: Prisma.FeeInstallmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInstallmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeeInstallmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInstallmentPayload>
          }
          findMany: {
            args: Prisma.FeeInstallmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInstallmentPayload>[]
          }
          create: {
            args: Prisma.FeeInstallmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInstallmentPayload>
          }
          createMany: {
            args: Prisma.FeeInstallmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeeInstallmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInstallmentPayload>[]
          }
          delete: {
            args: Prisma.FeeInstallmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInstallmentPayload>
          }
          update: {
            args: Prisma.FeeInstallmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInstallmentPayload>
          }
          deleteMany: {
            args: Prisma.FeeInstallmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeeInstallmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeeInstallmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInstallmentPayload>[]
          }
          upsert: {
            args: Prisma.FeeInstallmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInstallmentPayload>
          }
          aggregate: {
            args: Prisma.FeeInstallmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeeInstallment>
          }
          groupBy: {
            args: Prisma.FeeInstallmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeeInstallmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeeInstallmentCountArgs<ExtArgs>
            result: $Utils.Optional<FeeInstallmentCountAggregateOutputType> | number
          }
        }
      }
      FeePayment: {
        payload: Prisma.$FeePaymentPayload<ExtArgs>
        fields: Prisma.FeePaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeePaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeePaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload>
          }
          findFirst: {
            args: Prisma.FeePaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeePaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload>
          }
          findMany: {
            args: Prisma.FeePaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload>[]
          }
          create: {
            args: Prisma.FeePaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload>
          }
          createMany: {
            args: Prisma.FeePaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeePaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload>[]
          }
          delete: {
            args: Prisma.FeePaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload>
          }
          update: {
            args: Prisma.FeePaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload>
          }
          deleteMany: {
            args: Prisma.FeePaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeePaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeePaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload>[]
          }
          upsert: {
            args: Prisma.FeePaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload>
          }
          aggregate: {
            args: Prisma.FeePaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeePayment>
          }
          groupBy: {
            args: Prisma.FeePaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeePaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeePaymentCountArgs<ExtArgs>
            result: $Utils.Optional<FeePaymentCountAggregateOutputType> | number
          }
        }
      }
      Route: {
        payload: Prisma.$RoutePayload<ExtArgs>
        fields: Prisma.RouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findFirst: {
            args: Prisma.RouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findMany: {
            args: Prisma.RouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          create: {
            args: Prisma.RouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          createMany: {
            args: Prisma.RouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          delete: {
            args: Prisma.RouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          update: {
            args: Prisma.RouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          deleteMany: {
            args: Prisma.RouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          upsert: {
            args: Prisma.RouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          aggregate: {
            args: Prisma.RouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoute>
          }
          groupBy: {
            args: Prisma.RouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteCountArgs<ExtArgs>
            result: $Utils.Optional<RouteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    school?: SchoolOmit
    passwordReset?: PasswordResetOmit
    student?: StudentOmit
    studentAcademicHistory?: StudentAcademicHistoryOmit
    parent?: ParentOmit
    document?: DocumentOmit
    feeStructure?: FeeStructureOmit
    studentFee?: StudentFeeOmit
    feeInstallment?: FeeInstallmentOmit
    feePayment?: FeePaymentOmit
    route?: RouteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    students: number
    parents: number
    feeStructures: number
    routes: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | SchoolCountOutputTypeCountStudentsArgs
    parents?: boolean | SchoolCountOutputTypeCountParentsArgs
    feeStructures?: boolean | SchoolCountOutputTypeCountFeeStructuresArgs
    routes?: boolean | SchoolCountOutputTypeCountRoutesArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountParentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountFeeStructuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeeStructureWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    academicHistory: number
    documents: number
    studentFees: number
    feePayments: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    academicHistory?: boolean | StudentCountOutputTypeCountAcademicHistoryArgs
    documents?: boolean | StudentCountOutputTypeCountDocumentsArgs
    studentFees?: boolean | StudentCountOutputTypeCountStudentFeesArgs
    feePayments?: boolean | StudentCountOutputTypeCountFeePaymentsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAcademicHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAcademicHistoryWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountStudentFeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentFeeWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountFeePaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeePaymentWhereInput
  }


  /**
   * Count Type ParentCountOutputType
   */

  export type ParentCountOutputType = {
    students: number
  }

  export type ParentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | ParentCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentCountOutputType
     */
    select?: ParentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type StudentFeeCountOutputType
   */

  export type StudentFeeCountOutputType = {
    installments: number
  }

  export type StudentFeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installments?: boolean | StudentFeeCountOutputTypeCountInstallmentsArgs
  }

  // Custom InputTypes
  /**
   * StudentFeeCountOutputType without action
   */
  export type StudentFeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentFeeCountOutputType
     */
    select?: StudentFeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentFeeCountOutputType without action
   */
  export type StudentFeeCountOutputTypeCountInstallmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeeInstallmentWhereInput
  }


  /**
   * Count Type FeeInstallmentCountOutputType
   */

  export type FeeInstallmentCountOutputType = {
    payments: number
  }

  export type FeeInstallmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | FeeInstallmentCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * FeeInstallmentCountOutputType without action
   */
  export type FeeInstallmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInstallmentCountOutputType
     */
    select?: FeeInstallmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeeInstallmentCountOutputType without action
   */
  export type FeeInstallmentCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeePaymentWhereInput
  }


  /**
   * Count Type RouteCountOutputType
   */

  export type RouteCountOutputType = {
    students: number
  }

  export type RouteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | RouteCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteCountOutputType
     */
    select?: RouteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolMinAggregateOutputType = {
    id: string | null
    schoolName: string | null
    schoolType: string | null
    boardAffiliation: string | null
    establishmentYear: string | null
    schoolCode: string | null
    udiseCode: string | null
    schoolCategory: string | null
    officialEmail: string | null
    landlineNumber: string | null
    mobileNumber: string | null
    alternativeMobile: string | null
    website: string | null
    schoolAddress: string | null
    city: string | null
    state: string | null
    pinCode: string | null
    country: string | null
    adminName: string | null
    adminDesignation: string | null
    adminEmail: string | null
    adminPassword: string | null
    confirmPassword: string | null
    adminMobile: string | null
    studentStrength: string | null
    teachingStaff: string | null
    nonTeachingStaff: string | null
    totalClasses: string | null
    plan: string | null
    billingCycle: string | null
    termsAccepted: boolean | null
    privacyAccepted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: string | null
    schoolName: string | null
    schoolType: string | null
    boardAffiliation: string | null
    establishmentYear: string | null
    schoolCode: string | null
    udiseCode: string | null
    schoolCategory: string | null
    officialEmail: string | null
    landlineNumber: string | null
    mobileNumber: string | null
    alternativeMobile: string | null
    website: string | null
    schoolAddress: string | null
    city: string | null
    state: string | null
    pinCode: string | null
    country: string | null
    adminName: string | null
    adminDesignation: string | null
    adminEmail: string | null
    adminPassword: string | null
    confirmPassword: string | null
    adminMobile: string | null
    studentStrength: string | null
    teachingStaff: string | null
    nonTeachingStaff: string | null
    totalClasses: string | null
    plan: string | null
    billingCycle: string | null
    termsAccepted: boolean | null
    privacyAccepted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    schoolName: number
    schoolType: number
    boardAffiliation: number
    establishmentYear: number
    schoolCode: number
    udiseCode: number
    schoolCategory: number
    officialEmail: number
    landlineNumber: number
    mobileNumber: number
    alternativeMobile: number
    website: number
    schoolAddress: number
    city: number
    state: number
    pinCode: number
    country: number
    adminName: number
    adminDesignation: number
    adminEmail: number
    adminPassword: number
    confirmPassword: number
    adminMobile: number
    studentStrength: number
    teachingStaff: number
    nonTeachingStaff: number
    totalClasses: number
    mediumOfInstruction: number
    streamsOffered: number
    plan: number
    billingCycle: number
    termsAccepted: number
    privacyAccepted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SchoolMinAggregateInputType = {
    id?: true
    schoolName?: true
    schoolType?: true
    boardAffiliation?: true
    establishmentYear?: true
    schoolCode?: true
    udiseCode?: true
    schoolCategory?: true
    officialEmail?: true
    landlineNumber?: true
    mobileNumber?: true
    alternativeMobile?: true
    website?: true
    schoolAddress?: true
    city?: true
    state?: true
    pinCode?: true
    country?: true
    adminName?: true
    adminDesignation?: true
    adminEmail?: true
    adminPassword?: true
    confirmPassword?: true
    adminMobile?: true
    studentStrength?: true
    teachingStaff?: true
    nonTeachingStaff?: true
    totalClasses?: true
    plan?: true
    billingCycle?: true
    termsAccepted?: true
    privacyAccepted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    schoolName?: true
    schoolType?: true
    boardAffiliation?: true
    establishmentYear?: true
    schoolCode?: true
    udiseCode?: true
    schoolCategory?: true
    officialEmail?: true
    landlineNumber?: true
    mobileNumber?: true
    alternativeMobile?: true
    website?: true
    schoolAddress?: true
    city?: true
    state?: true
    pinCode?: true
    country?: true
    adminName?: true
    adminDesignation?: true
    adminEmail?: true
    adminPassword?: true
    confirmPassword?: true
    adminMobile?: true
    studentStrength?: true
    teachingStaff?: true
    nonTeachingStaff?: true
    totalClasses?: true
    plan?: true
    billingCycle?: true
    termsAccepted?: true
    privacyAccepted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    schoolName?: true
    schoolType?: true
    boardAffiliation?: true
    establishmentYear?: true
    schoolCode?: true
    udiseCode?: true
    schoolCategory?: true
    officialEmail?: true
    landlineNumber?: true
    mobileNumber?: true
    alternativeMobile?: true
    website?: true
    schoolAddress?: true
    city?: true
    state?: true
    pinCode?: true
    country?: true
    adminName?: true
    adminDesignation?: true
    adminEmail?: true
    adminPassword?: true
    confirmPassword?: true
    adminMobile?: true
    studentStrength?: true
    teachingStaff?: true
    nonTeachingStaff?: true
    totalClasses?: true
    mediumOfInstruction?: true
    streamsOffered?: true
    plan?: true
    billingCycle?: true
    termsAccepted?: true
    privacyAccepted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: string
    schoolName: string
    schoolType: string
    boardAffiliation: string
    establishmentYear: string
    schoolCode: string
    udiseCode: string | null
    schoolCategory: string
    officialEmail: string
    landlineNumber: string | null
    mobileNumber: string
    alternativeMobile: string | null
    website: string | null
    schoolAddress: string
    city: string
    state: string
    pinCode: string
    country: string
    adminName: string
    adminDesignation: string
    adminEmail: string
    adminPassword: string
    confirmPassword: string
    adminMobile: string
    studentStrength: string
    teachingStaff: string
    nonTeachingStaff: string
    totalClasses: string
    mediumOfInstruction: string[]
    streamsOffered: string[]
    plan: string
    billingCycle: string
    termsAccepted: boolean
    privacyAccepted: boolean
    createdAt: Date
    updatedAt: Date
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolName?: boolean
    schoolType?: boolean
    boardAffiliation?: boolean
    establishmentYear?: boolean
    schoolCode?: boolean
    udiseCode?: boolean
    schoolCategory?: boolean
    officialEmail?: boolean
    landlineNumber?: boolean
    mobileNumber?: boolean
    alternativeMobile?: boolean
    website?: boolean
    schoolAddress?: boolean
    city?: boolean
    state?: boolean
    pinCode?: boolean
    country?: boolean
    adminName?: boolean
    adminDesignation?: boolean
    adminEmail?: boolean
    adminPassword?: boolean
    confirmPassword?: boolean
    adminMobile?: boolean
    studentStrength?: boolean
    teachingStaff?: boolean
    nonTeachingStaff?: boolean
    totalClasses?: boolean
    mediumOfInstruction?: boolean
    streamsOffered?: boolean
    plan?: boolean
    billingCycle?: boolean
    termsAccepted?: boolean
    privacyAccepted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    students?: boolean | School$studentsArgs<ExtArgs>
    parents?: boolean | School$parentsArgs<ExtArgs>
    feeStructures?: boolean | School$feeStructuresArgs<ExtArgs>
    routes?: boolean | School$routesArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolName?: boolean
    schoolType?: boolean
    boardAffiliation?: boolean
    establishmentYear?: boolean
    schoolCode?: boolean
    udiseCode?: boolean
    schoolCategory?: boolean
    officialEmail?: boolean
    landlineNumber?: boolean
    mobileNumber?: boolean
    alternativeMobile?: boolean
    website?: boolean
    schoolAddress?: boolean
    city?: boolean
    state?: boolean
    pinCode?: boolean
    country?: boolean
    adminName?: boolean
    adminDesignation?: boolean
    adminEmail?: boolean
    adminPassword?: boolean
    confirmPassword?: boolean
    adminMobile?: boolean
    studentStrength?: boolean
    teachingStaff?: boolean
    nonTeachingStaff?: boolean
    totalClasses?: boolean
    mediumOfInstruction?: boolean
    streamsOffered?: boolean
    plan?: boolean
    billingCycle?: boolean
    termsAccepted?: boolean
    privacyAccepted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolName?: boolean
    schoolType?: boolean
    boardAffiliation?: boolean
    establishmentYear?: boolean
    schoolCode?: boolean
    udiseCode?: boolean
    schoolCategory?: boolean
    officialEmail?: boolean
    landlineNumber?: boolean
    mobileNumber?: boolean
    alternativeMobile?: boolean
    website?: boolean
    schoolAddress?: boolean
    city?: boolean
    state?: boolean
    pinCode?: boolean
    country?: boolean
    adminName?: boolean
    adminDesignation?: boolean
    adminEmail?: boolean
    adminPassword?: boolean
    confirmPassword?: boolean
    adminMobile?: boolean
    studentStrength?: boolean
    teachingStaff?: boolean
    nonTeachingStaff?: boolean
    totalClasses?: boolean
    mediumOfInstruction?: boolean
    streamsOffered?: boolean
    plan?: boolean
    billingCycle?: boolean
    termsAccepted?: boolean
    privacyAccepted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectScalar = {
    id?: boolean
    schoolName?: boolean
    schoolType?: boolean
    boardAffiliation?: boolean
    establishmentYear?: boolean
    schoolCode?: boolean
    udiseCode?: boolean
    schoolCategory?: boolean
    officialEmail?: boolean
    landlineNumber?: boolean
    mobileNumber?: boolean
    alternativeMobile?: boolean
    website?: boolean
    schoolAddress?: boolean
    city?: boolean
    state?: boolean
    pinCode?: boolean
    country?: boolean
    adminName?: boolean
    adminDesignation?: boolean
    adminEmail?: boolean
    adminPassword?: boolean
    confirmPassword?: boolean
    adminMobile?: boolean
    studentStrength?: boolean
    teachingStaff?: boolean
    nonTeachingStaff?: boolean
    totalClasses?: boolean
    mediumOfInstruction?: boolean
    streamsOffered?: boolean
    plan?: boolean
    billingCycle?: boolean
    termsAccepted?: boolean
    privacyAccepted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolName" | "schoolType" | "boardAffiliation" | "establishmentYear" | "schoolCode" | "udiseCode" | "schoolCategory" | "officialEmail" | "landlineNumber" | "mobileNumber" | "alternativeMobile" | "website" | "schoolAddress" | "city" | "state" | "pinCode" | "country" | "adminName" | "adminDesignation" | "adminEmail" | "adminPassword" | "confirmPassword" | "adminMobile" | "studentStrength" | "teachingStaff" | "nonTeachingStaff" | "totalClasses" | "mediumOfInstruction" | "streamsOffered" | "plan" | "billingCycle" | "termsAccepted" | "privacyAccepted" | "createdAt" | "updatedAt", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | School$studentsArgs<ExtArgs>
    parents?: boolean | School$parentsArgs<ExtArgs>
    feeStructures?: boolean | School$feeStructuresArgs<ExtArgs>
    routes?: boolean | School$routesArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      students: Prisma.$StudentPayload<ExtArgs>[]
      parents: Prisma.$ParentPayload<ExtArgs>[]
      feeStructures: Prisma.$FeeStructurePayload<ExtArgs>[]
      routes: Prisma.$RoutePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      schoolName: string
      schoolType: string
      boardAffiliation: string
      establishmentYear: string
      schoolCode: string
      udiseCode: string | null
      schoolCategory: string
      officialEmail: string
      landlineNumber: string | null
      mobileNumber: string
      alternativeMobile: string | null
      website: string | null
      schoolAddress: string
      city: string
      state: string
      pinCode: string
      country: string
      adminName: string
      adminDesignation: string
      adminEmail: string
      adminPassword: string
      confirmPassword: string
      adminMobile: string
      studentStrength: string
      teachingStaff: string
      nonTeachingStaff: string
      totalClasses: string
      mediumOfInstruction: string[]
      streamsOffered: string[]
      plan: string
      billingCycle: string
      termsAccepted: boolean
      privacyAccepted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {SchoolCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {SchoolUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends School$studentsArgs<ExtArgs> = {}>(args?: Subset<T, School$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parents<T extends School$parentsArgs<ExtArgs> = {}>(args?: Subset<T, School$parentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feeStructures<T extends School$feeStructuresArgs<ExtArgs> = {}>(args?: Subset<T, School$feeStructuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routes<T extends School$routesArgs<ExtArgs> = {}>(args?: Subset<T, School$routesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'String'>
    readonly schoolName: FieldRef<"School", 'String'>
    readonly schoolType: FieldRef<"School", 'String'>
    readonly boardAffiliation: FieldRef<"School", 'String'>
    readonly establishmentYear: FieldRef<"School", 'String'>
    readonly schoolCode: FieldRef<"School", 'String'>
    readonly udiseCode: FieldRef<"School", 'String'>
    readonly schoolCategory: FieldRef<"School", 'String'>
    readonly officialEmail: FieldRef<"School", 'String'>
    readonly landlineNumber: FieldRef<"School", 'String'>
    readonly mobileNumber: FieldRef<"School", 'String'>
    readonly alternativeMobile: FieldRef<"School", 'String'>
    readonly website: FieldRef<"School", 'String'>
    readonly schoolAddress: FieldRef<"School", 'String'>
    readonly city: FieldRef<"School", 'String'>
    readonly state: FieldRef<"School", 'String'>
    readonly pinCode: FieldRef<"School", 'String'>
    readonly country: FieldRef<"School", 'String'>
    readonly adminName: FieldRef<"School", 'String'>
    readonly adminDesignation: FieldRef<"School", 'String'>
    readonly adminEmail: FieldRef<"School", 'String'>
    readonly adminPassword: FieldRef<"School", 'String'>
    readonly confirmPassword: FieldRef<"School", 'String'>
    readonly adminMobile: FieldRef<"School", 'String'>
    readonly studentStrength: FieldRef<"School", 'String'>
    readonly teachingStaff: FieldRef<"School", 'String'>
    readonly nonTeachingStaff: FieldRef<"School", 'String'>
    readonly totalClasses: FieldRef<"School", 'String'>
    readonly mediumOfInstruction: FieldRef<"School", 'String[]'>
    readonly streamsOffered: FieldRef<"School", 'String[]'>
    readonly plan: FieldRef<"School", 'String'>
    readonly billingCycle: FieldRef<"School", 'String'>
    readonly termsAccepted: FieldRef<"School", 'Boolean'>
    readonly privacyAccepted: FieldRef<"School", 'Boolean'>
    readonly createdAt: FieldRef<"School", 'DateTime'>
    readonly updatedAt: FieldRef<"School", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School createManyAndReturn
   */
  export type SchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School updateManyAndReturn
   */
  export type SchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School.students
   */
  export type School$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * School.parents
   */
  export type School$parentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    where?: ParentWhereInput
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    cursor?: ParentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * School.feeStructures
   */
  export type School$feeStructuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeStructure
     */
    omit?: FeeStructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null
    where?: FeeStructureWhereInput
    orderBy?: FeeStructureOrderByWithRelationInput | FeeStructureOrderByWithRelationInput[]
    cursor?: FeeStructureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeeStructureScalarFieldEnum | FeeStructureScalarFieldEnum[]
  }

  /**
   * School.routes
   */
  export type School$routesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    cursor?: RouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Model PasswordReset
   */

  export type AggregatePasswordReset = {
    _count: PasswordResetCountAggregateOutputType | null
    _avg: PasswordResetAvgAggregateOutputType | null
    _sum: PasswordResetSumAggregateOutputType | null
    _min: PasswordResetMinAggregateOutputType | null
    _max: PasswordResetMaxAggregateOutputType | null
  }

  export type PasswordResetAvgAggregateOutputType = {
    attempts: number | null
  }

  export type PasswordResetSumAggregateOutputType = {
    attempts: number | null
  }

  export type PasswordResetMinAggregateOutputType = {
    id: string | null
    adminEmail: string | null
    otpSecret: string | null
    hashedOtp: string | null
    expiresAt: Date | null
    attempts: number | null
    createdAt: Date | null
  }

  export type PasswordResetMaxAggregateOutputType = {
    id: string | null
    adminEmail: string | null
    otpSecret: string | null
    hashedOtp: string | null
    expiresAt: Date | null
    attempts: number | null
    createdAt: Date | null
  }

  export type PasswordResetCountAggregateOutputType = {
    id: number
    adminEmail: number
    otpSecret: number
    hashedOtp: number
    expiresAt: number
    attempts: number
    createdAt: number
    _all: number
  }


  export type PasswordResetAvgAggregateInputType = {
    attempts?: true
  }

  export type PasswordResetSumAggregateInputType = {
    attempts?: true
  }

  export type PasswordResetMinAggregateInputType = {
    id?: true
    adminEmail?: true
    otpSecret?: true
    hashedOtp?: true
    expiresAt?: true
    attempts?: true
    createdAt?: true
  }

  export type PasswordResetMaxAggregateInputType = {
    id?: true
    adminEmail?: true
    otpSecret?: true
    hashedOtp?: true
    expiresAt?: true
    attempts?: true
    createdAt?: true
  }

  export type PasswordResetCountAggregateInputType = {
    id?: true
    adminEmail?: true
    otpSecret?: true
    hashedOtp?: true
    expiresAt?: true
    attempts?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordReset to aggregate.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResets
    **/
    _count?: true | PasswordResetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordResetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordResetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetMaxAggregateInputType
  }

  export type GetPasswordResetAggregateType<T extends PasswordResetAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordReset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordReset[P]>
      : GetScalarType<T[P], AggregatePasswordReset[P]>
  }




  export type PasswordResetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetWhereInput
    orderBy?: PasswordResetOrderByWithAggregationInput | PasswordResetOrderByWithAggregationInput[]
    by: PasswordResetScalarFieldEnum[] | PasswordResetScalarFieldEnum
    having?: PasswordResetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetCountAggregateInputType | true
    _avg?: PasswordResetAvgAggregateInputType
    _sum?: PasswordResetSumAggregateInputType
    _min?: PasswordResetMinAggregateInputType
    _max?: PasswordResetMaxAggregateInputType
  }

  export type PasswordResetGroupByOutputType = {
    id: string
    adminEmail: string
    otpSecret: string | null
    hashedOtp: string | null
    expiresAt: Date
    attempts: number
    createdAt: Date
    _count: PasswordResetCountAggregateOutputType | null
    _avg: PasswordResetAvgAggregateOutputType | null
    _sum: PasswordResetSumAggregateOutputType | null
    _min: PasswordResetMinAggregateOutputType | null
    _max: PasswordResetMaxAggregateOutputType | null
  }

  type GetPasswordResetGroupByPayload<T extends PasswordResetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminEmail?: boolean
    otpSecret?: boolean
    hashedOtp?: boolean
    expiresAt?: boolean
    attempts?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminEmail?: boolean
    otpSecret?: boolean
    hashedOtp?: boolean
    expiresAt?: boolean
    attempts?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminEmail?: boolean
    otpSecret?: boolean
    hashedOtp?: boolean
    expiresAt?: boolean
    attempts?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectScalar = {
    id?: boolean
    adminEmail?: boolean
    otpSecret?: boolean
    hashedOtp?: boolean
    expiresAt?: boolean
    attempts?: boolean
    createdAt?: boolean
  }

  export type PasswordResetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adminEmail" | "otpSecret" | "hashedOtp" | "expiresAt" | "attempts" | "createdAt", ExtArgs["result"]["passwordReset"]>

  export type $PasswordResetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordReset"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adminEmail: string
      otpSecret: string | null
      hashedOtp: string | null
      expiresAt: Date
      attempts: number
      createdAt: Date
    }, ExtArgs["result"]["passwordReset"]>
    composites: {}
  }

  type PasswordResetGetPayload<S extends boolean | null | undefined | PasswordResetDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetPayload, S>

  type PasswordResetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetCountAggregateInputType | true
    }

  export interface PasswordResetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordReset'], meta: { name: 'PasswordReset' } }
    /**
     * Find zero or one PasswordReset that matches the filter.
     * @param {PasswordResetFindUniqueArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetFindUniqueArgs>(args: SelectSubset<T, PasswordResetFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordReset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetFindUniqueOrThrowArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordReset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindFirstArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetFindFirstArgs>(args?: SelectSubset<T, PasswordResetFindFirstArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordReset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindFirstOrThrowArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResets
     * const passwordResets = await prisma.passwordReset.findMany()
     * 
     * // Get first 10 PasswordResets
     * const passwordResets = await prisma.passwordReset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetFindManyArgs>(args?: SelectSubset<T, PasswordResetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordReset.
     * @param {PasswordResetCreateArgs} args - Arguments to create a PasswordReset.
     * @example
     * // Create one PasswordReset
     * const PasswordReset = await prisma.passwordReset.create({
     *   data: {
     *     // ... data to create a PasswordReset
     *   }
     * })
     * 
     */
    create<T extends PasswordResetCreateArgs>(args: SelectSubset<T, PasswordResetCreateArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResets.
     * @param {PasswordResetCreateManyArgs} args - Arguments to create many PasswordResets.
     * @example
     * // Create many PasswordResets
     * const passwordReset = await prisma.passwordReset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetCreateManyArgs>(args?: SelectSubset<T, PasswordResetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResets and returns the data saved in the database.
     * @param {PasswordResetCreateManyAndReturnArgs} args - Arguments to create many PasswordResets.
     * @example
     * // Create many PasswordResets
     * const passwordReset = await prisma.passwordReset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResets and only return the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordReset.
     * @param {PasswordResetDeleteArgs} args - Arguments to delete one PasswordReset.
     * @example
     * // Delete one PasswordReset
     * const PasswordReset = await prisma.passwordReset.delete({
     *   where: {
     *     // ... filter to delete one PasswordReset
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetDeleteArgs>(args: SelectSubset<T, PasswordResetDeleteArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordReset.
     * @param {PasswordResetUpdateArgs} args - Arguments to update one PasswordReset.
     * @example
     * // Update one PasswordReset
     * const passwordReset = await prisma.passwordReset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetUpdateArgs>(args: SelectSubset<T, PasswordResetUpdateArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResets.
     * @param {PasswordResetDeleteManyArgs} args - Arguments to filter PasswordResets to delete.
     * @example
     * // Delete a few PasswordResets
     * const { count } = await prisma.passwordReset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetDeleteManyArgs>(args?: SelectSubset<T, PasswordResetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResets
     * const passwordReset = await prisma.passwordReset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetUpdateManyArgs>(args: SelectSubset<T, PasswordResetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResets and returns the data updated in the database.
     * @param {PasswordResetUpdateManyAndReturnArgs} args - Arguments to update many PasswordResets.
     * @example
     * // Update many PasswordResets
     * const passwordReset = await prisma.passwordReset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResets and only return the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordResetUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordReset.
     * @param {PasswordResetUpsertArgs} args - Arguments to update or create a PasswordReset.
     * @example
     * // Update or create a PasswordReset
     * const passwordReset = await prisma.passwordReset.upsert({
     *   create: {
     *     // ... data to create a PasswordReset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordReset we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetUpsertArgs>(args: SelectSubset<T, PasswordResetUpsertArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetCountArgs} args - Arguments to filter PasswordResets to count.
     * @example
     * // Count the number of PasswordResets
     * const count = await prisma.passwordReset.count({
     *   where: {
     *     // ... the filter for the PasswordResets we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetCountArgs>(
      args?: Subset<T, PasswordResetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordResetAggregateArgs>(args: Subset<T, PasswordResetAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetAggregateType<T>>

    /**
     * Group by PasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordResetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordResetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordReset model
   */
  readonly fields: PasswordResetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordReset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordReset model
   */
  interface PasswordResetFieldRefs {
    readonly id: FieldRef<"PasswordReset", 'String'>
    readonly adminEmail: FieldRef<"PasswordReset", 'String'>
    readonly otpSecret: FieldRef<"PasswordReset", 'String'>
    readonly hashedOtp: FieldRef<"PasswordReset", 'String'>
    readonly expiresAt: FieldRef<"PasswordReset", 'DateTime'>
    readonly attempts: FieldRef<"PasswordReset", 'Int'>
    readonly createdAt: FieldRef<"PasswordReset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordReset findUnique
   */
  export type PasswordResetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset findUniqueOrThrow
   */
  export type PasswordResetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset findFirst
   */
  export type PasswordResetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResets.
     */
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset findFirstOrThrow
   */
  export type PasswordResetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResets.
     */
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset findMany
   */
  export type PasswordResetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResets to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset create
   */
  export type PasswordResetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data needed to create a PasswordReset.
     */
    data: XOR<PasswordResetCreateInput, PasswordResetUncheckedCreateInput>
  }

  /**
   * PasswordReset createMany
   */
  export type PasswordResetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResets.
     */
    data: PasswordResetCreateManyInput | PasswordResetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordReset createManyAndReturn
   */
  export type PasswordResetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResets.
     */
    data: PasswordResetCreateManyInput | PasswordResetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordReset update
   */
  export type PasswordResetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data needed to update a PasswordReset.
     */
    data: XOR<PasswordResetUpdateInput, PasswordResetUncheckedUpdateInput>
    /**
     * Choose, which PasswordReset to update.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset updateMany
   */
  export type PasswordResetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResets.
     */
    data: XOR<PasswordResetUpdateManyMutationInput, PasswordResetUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResets to update
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to update.
     */
    limit?: number
  }

  /**
   * PasswordReset updateManyAndReturn
   */
  export type PasswordResetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResets.
     */
    data: XOR<PasswordResetUpdateManyMutationInput, PasswordResetUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResets to update
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to update.
     */
    limit?: number
  }

  /**
   * PasswordReset upsert
   */
  export type PasswordResetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The filter to search for the PasswordReset to update in case it exists.
     */
    where: PasswordResetWhereUniqueInput
    /**
     * In case the PasswordReset found by the `where` argument doesn't exist, create a new PasswordReset with this data.
     */
    create: XOR<PasswordResetCreateInput, PasswordResetUncheckedCreateInput>
    /**
     * In case the PasswordReset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetUpdateInput, PasswordResetUncheckedUpdateInput>
  }

  /**
   * PasswordReset delete
   */
  export type PasswordResetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Filter which PasswordReset to delete.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset deleteMany
   */
  export type PasswordResetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResets to delete
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to delete.
     */
    limit?: number
  }

  /**
   * PasswordReset without action
   */
  export type PasswordResetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    admissionNumber: string | null
    qrCodeValue: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    gender: string | null
    bloodGroup: string | null
    aadharNumber: string | null
    photoUrl: string | null
    parentPrimaryMobile: string | null
    parentAlternateMobile: string | null
    parentEmail: string | null
    emergencyContactName: string | null
    emergencyContactPhone: string | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    pinCode: string | null
    country: string | null
    admissionDate: Date | null
    previousSchoolId: string | null
    usesTransport: boolean | null
    transportRouteId: string | null
    pickupPoint: string | null
    dropPoint: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    schoolId: string | null
    parentId: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    admissionNumber: string | null
    qrCodeValue: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    gender: string | null
    bloodGroup: string | null
    aadharNumber: string | null
    photoUrl: string | null
    parentPrimaryMobile: string | null
    parentAlternateMobile: string | null
    parentEmail: string | null
    emergencyContactName: string | null
    emergencyContactPhone: string | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    pinCode: string | null
    country: string | null
    admissionDate: Date | null
    previousSchoolId: string | null
    usesTransport: boolean | null
    transportRouteId: string | null
    pickupPoint: string | null
    dropPoint: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    schoolId: string | null
    parentId: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    studentId: number
    admissionNumber: number
    qrCodeValue: number
    firstName: number
    middleName: number
    lastName: number
    dateOfBirth: number
    gender: number
    bloodGroup: number
    aadharNumber: number
    photoUrl: number
    parentPrimaryMobile: number
    parentAlternateMobile: number
    parentEmail: number
    emergencyContactName: number
    emergencyContactPhone: number
    addressLine1: number
    addressLine2: number
    city: number
    state: number
    pinCode: number
    country: number
    admissionDate: number
    previousSchoolId: number
    usesTransport: number
    transportRouteId: number
    pickupPoint: number
    dropPoint: number
    status: number
    createdAt: number
    updatedAt: number
    schoolId: number
    parentId: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    studentId?: true
    admissionNumber?: true
    qrCodeValue?: true
    firstName?: true
    middleName?: true
    lastName?: true
    dateOfBirth?: true
    gender?: true
    bloodGroup?: true
    aadharNumber?: true
    photoUrl?: true
    parentPrimaryMobile?: true
    parentAlternateMobile?: true
    parentEmail?: true
    emergencyContactName?: true
    emergencyContactPhone?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    pinCode?: true
    country?: true
    admissionDate?: true
    previousSchoolId?: true
    usesTransport?: true
    transportRouteId?: true
    pickupPoint?: true
    dropPoint?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    schoolId?: true
    parentId?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    studentId?: true
    admissionNumber?: true
    qrCodeValue?: true
    firstName?: true
    middleName?: true
    lastName?: true
    dateOfBirth?: true
    gender?: true
    bloodGroup?: true
    aadharNumber?: true
    photoUrl?: true
    parentPrimaryMobile?: true
    parentAlternateMobile?: true
    parentEmail?: true
    emergencyContactName?: true
    emergencyContactPhone?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    pinCode?: true
    country?: true
    admissionDate?: true
    previousSchoolId?: true
    usesTransport?: true
    transportRouteId?: true
    pickupPoint?: true
    dropPoint?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    schoolId?: true
    parentId?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    studentId?: true
    admissionNumber?: true
    qrCodeValue?: true
    firstName?: true
    middleName?: true
    lastName?: true
    dateOfBirth?: true
    gender?: true
    bloodGroup?: true
    aadharNumber?: true
    photoUrl?: true
    parentPrimaryMobile?: true
    parentAlternateMobile?: true
    parentEmail?: true
    emergencyContactName?: true
    emergencyContactPhone?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    pinCode?: true
    country?: true
    admissionDate?: true
    previousSchoolId?: true
    usesTransport?: true
    transportRouteId?: true
    pickupPoint?: true
    dropPoint?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    schoolId?: true
    parentId?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    studentId: string
    admissionNumber: string
    qrCodeValue: string
    firstName: string
    middleName: string | null
    lastName: string
    dateOfBirth: Date
    gender: string
    bloodGroup: string | null
    aadharNumber: string | null
    photoUrl: string | null
    parentPrimaryMobile: string
    parentAlternateMobile: string | null
    parentEmail: string | null
    emergencyContactName: string | null
    emergencyContactPhone: string | null
    addressLine1: string
    addressLine2: string | null
    city: string
    state: string
    pinCode: string
    country: string
    admissionDate: Date
    previousSchoolId: string | null
    usesTransport: boolean
    transportRouteId: string | null
    pickupPoint: string | null
    dropPoint: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    schoolId: string
    parentId: string
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    admissionNumber?: boolean
    qrCodeValue?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    bloodGroup?: boolean
    aadharNumber?: boolean
    photoUrl?: boolean
    parentPrimaryMobile?: boolean
    parentAlternateMobile?: boolean
    parentEmail?: boolean
    emergencyContactName?: boolean
    emergencyContactPhone?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    pinCode?: boolean
    country?: boolean
    admissionDate?: boolean
    previousSchoolId?: boolean
    usesTransport?: boolean
    transportRouteId?: boolean
    pickupPoint?: boolean
    dropPoint?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schoolId?: boolean
    parentId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    route?: boolean | Student$routeArgs<ExtArgs>
    academicHistory?: boolean | Student$academicHistoryArgs<ExtArgs>
    documents?: boolean | Student$documentsArgs<ExtArgs>
    studentFees?: boolean | Student$studentFeesArgs<ExtArgs>
    feePayments?: boolean | Student$feePaymentsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    admissionNumber?: boolean
    qrCodeValue?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    bloodGroup?: boolean
    aadharNumber?: boolean
    photoUrl?: boolean
    parentPrimaryMobile?: boolean
    parentAlternateMobile?: boolean
    parentEmail?: boolean
    emergencyContactName?: boolean
    emergencyContactPhone?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    pinCode?: boolean
    country?: boolean
    admissionDate?: boolean
    previousSchoolId?: boolean
    usesTransport?: boolean
    transportRouteId?: boolean
    pickupPoint?: boolean
    dropPoint?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schoolId?: boolean
    parentId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    route?: boolean | Student$routeArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    admissionNumber?: boolean
    qrCodeValue?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    bloodGroup?: boolean
    aadharNumber?: boolean
    photoUrl?: boolean
    parentPrimaryMobile?: boolean
    parentAlternateMobile?: boolean
    parentEmail?: boolean
    emergencyContactName?: boolean
    emergencyContactPhone?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    pinCode?: boolean
    country?: boolean
    admissionDate?: boolean
    previousSchoolId?: boolean
    usesTransport?: boolean
    transportRouteId?: boolean
    pickupPoint?: boolean
    dropPoint?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schoolId?: boolean
    parentId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    route?: boolean | Student$routeArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    studentId?: boolean
    admissionNumber?: boolean
    qrCodeValue?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    bloodGroup?: boolean
    aadharNumber?: boolean
    photoUrl?: boolean
    parentPrimaryMobile?: boolean
    parentAlternateMobile?: boolean
    parentEmail?: boolean
    emergencyContactName?: boolean
    emergencyContactPhone?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    pinCode?: boolean
    country?: boolean
    admissionDate?: boolean
    previousSchoolId?: boolean
    usesTransport?: boolean
    transportRouteId?: boolean
    pickupPoint?: boolean
    dropPoint?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schoolId?: boolean
    parentId?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "admissionNumber" | "qrCodeValue" | "firstName" | "middleName" | "lastName" | "dateOfBirth" | "gender" | "bloodGroup" | "aadharNumber" | "photoUrl" | "parentPrimaryMobile" | "parentAlternateMobile" | "parentEmail" | "emergencyContactName" | "emergencyContactPhone" | "addressLine1" | "addressLine2" | "city" | "state" | "pinCode" | "country" | "admissionDate" | "previousSchoolId" | "usesTransport" | "transportRouteId" | "pickupPoint" | "dropPoint" | "status" | "createdAt" | "updatedAt" | "schoolId" | "parentId", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    route?: boolean | Student$routeArgs<ExtArgs>
    academicHistory?: boolean | Student$academicHistoryArgs<ExtArgs>
    documents?: boolean | Student$documentsArgs<ExtArgs>
    studentFees?: boolean | Student$studentFeesArgs<ExtArgs>
    feePayments?: boolean | Student$feePaymentsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    route?: boolean | Student$routeArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    route?: boolean | Student$routeArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      parent: Prisma.$ParentPayload<ExtArgs>
      route: Prisma.$RoutePayload<ExtArgs> | null
      academicHistory: Prisma.$StudentAcademicHistoryPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      studentFees: Prisma.$StudentFeePayload<ExtArgs>[]
      feePayments: Prisma.$FeePaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      admissionNumber: string
      qrCodeValue: string
      firstName: string
      middleName: string | null
      lastName: string
      dateOfBirth: Date
      gender: string
      bloodGroup: string | null
      aadharNumber: string | null
      photoUrl: string | null
      parentPrimaryMobile: string
      parentAlternateMobile: string | null
      parentEmail: string | null
      emergencyContactName: string | null
      emergencyContactPhone: string | null
      addressLine1: string
      addressLine2: string | null
      city: string
      state: string
      pinCode: string
      country: string
      admissionDate: Date
      previousSchoolId: string | null
      usesTransport: boolean
      transportRouteId: string | null
      pickupPoint: string | null
      dropPoint: string | null
      status: string
      createdAt: Date
      updatedAt: Date
      schoolId: string
      parentId: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends ParentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParentDefaultArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    route<T extends Student$routeArgs<ExtArgs> = {}>(args?: Subset<T, Student$routeArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    academicHistory<T extends Student$academicHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Student$academicHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAcademicHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Student$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Student$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studentFees<T extends Student$studentFeesArgs<ExtArgs> = {}>(args?: Subset<T, Student$studentFeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentFeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feePayments<T extends Student$feePaymentsArgs<ExtArgs> = {}>(args?: Subset<T, Student$feePaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly studentId: FieldRef<"Student", 'String'>
    readonly admissionNumber: FieldRef<"Student", 'String'>
    readonly qrCodeValue: FieldRef<"Student", 'String'>
    readonly firstName: FieldRef<"Student", 'String'>
    readonly middleName: FieldRef<"Student", 'String'>
    readonly lastName: FieldRef<"Student", 'String'>
    readonly dateOfBirth: FieldRef<"Student", 'DateTime'>
    readonly gender: FieldRef<"Student", 'String'>
    readonly bloodGroup: FieldRef<"Student", 'String'>
    readonly aadharNumber: FieldRef<"Student", 'String'>
    readonly photoUrl: FieldRef<"Student", 'String'>
    readonly parentPrimaryMobile: FieldRef<"Student", 'String'>
    readonly parentAlternateMobile: FieldRef<"Student", 'String'>
    readonly parentEmail: FieldRef<"Student", 'String'>
    readonly emergencyContactName: FieldRef<"Student", 'String'>
    readonly emergencyContactPhone: FieldRef<"Student", 'String'>
    readonly addressLine1: FieldRef<"Student", 'String'>
    readonly addressLine2: FieldRef<"Student", 'String'>
    readonly city: FieldRef<"Student", 'String'>
    readonly state: FieldRef<"Student", 'String'>
    readonly pinCode: FieldRef<"Student", 'String'>
    readonly country: FieldRef<"Student", 'String'>
    readonly admissionDate: FieldRef<"Student", 'DateTime'>
    readonly previousSchoolId: FieldRef<"Student", 'String'>
    readonly usesTransport: FieldRef<"Student", 'Boolean'>
    readonly transportRouteId: FieldRef<"Student", 'String'>
    readonly pickupPoint: FieldRef<"Student", 'String'>
    readonly dropPoint: FieldRef<"Student", 'String'>
    readonly status: FieldRef<"Student", 'String'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
    readonly schoolId: FieldRef<"Student", 'String'>
    readonly parentId: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.route
   */
  export type Student$routeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    where?: RouteWhereInput
  }

  /**
   * Student.academicHistory
   */
  export type Student$academicHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicHistory
     */
    select?: StudentAcademicHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicHistory
     */
    omit?: StudentAcademicHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicHistoryInclude<ExtArgs> | null
    where?: StudentAcademicHistoryWhereInput
    orderBy?: StudentAcademicHistoryOrderByWithRelationInput | StudentAcademicHistoryOrderByWithRelationInput[]
    cursor?: StudentAcademicHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentAcademicHistoryScalarFieldEnum | StudentAcademicHistoryScalarFieldEnum[]
  }

  /**
   * Student.documents
   */
  export type Student$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Student.studentFees
   */
  export type Student$studentFeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentFee
     */
    select?: StudentFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentFee
     */
    omit?: StudentFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentFeeInclude<ExtArgs> | null
    where?: StudentFeeWhereInput
    orderBy?: StudentFeeOrderByWithRelationInput | StudentFeeOrderByWithRelationInput[]
    cursor?: StudentFeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentFeeScalarFieldEnum | StudentFeeScalarFieldEnum[]
  }

  /**
   * Student.feePayments
   */
  export type Student$feePaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
    where?: FeePaymentWhereInput
    orderBy?: FeePaymentOrderByWithRelationInput | FeePaymentOrderByWithRelationInput[]
    cursor?: FeePaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeePaymentScalarFieldEnum | FeePaymentScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model StudentAcademicHistory
   */

  export type AggregateStudentAcademicHistory = {
    _count: StudentAcademicHistoryCountAggregateOutputType | null
    _avg: StudentAcademicHistoryAvgAggregateOutputType | null
    _sum: StudentAcademicHistorySumAggregateOutputType | null
    _min: StudentAcademicHistoryMinAggregateOutputType | null
    _max: StudentAcademicHistoryMaxAggregateOutputType | null
  }

  export type StudentAcademicHistoryAvgAggregateOutputType = {
    rollNumber: number | null
    attendancePresent: number | null
    attendanceAbsent: number | null
  }

  export type StudentAcademicHistorySumAggregateOutputType = {
    rollNumber: number | null
    attendancePresent: number | null
    attendanceAbsent: number | null
  }

  export type StudentAcademicHistoryMinAggregateOutputType = {
    id: string | null
    academicYear: string | null
    class: string | null
    section: string | null
    rollNumber: number | null
    classTeacher: string | null
    promotionStatus: string | null
    attendancePresent: number | null
    attendanceAbsent: number | null
    finalGrade: string | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
    studentId: string | null
  }

  export type StudentAcademicHistoryMaxAggregateOutputType = {
    id: string | null
    academicYear: string | null
    class: string | null
    section: string | null
    rollNumber: number | null
    classTeacher: string | null
    promotionStatus: string | null
    attendancePresent: number | null
    attendanceAbsent: number | null
    finalGrade: string | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
    studentId: string | null
  }

  export type StudentAcademicHistoryCountAggregateOutputType = {
    id: number
    academicYear: number
    class: number
    section: number
    rollNumber: number
    classTeacher: number
    promotionStatus: number
    attendancePresent: number
    attendanceAbsent: number
    finalGrade: number
    remarks: number
    createdAt: number
    updatedAt: number
    studentId: number
    _all: number
  }


  export type StudentAcademicHistoryAvgAggregateInputType = {
    rollNumber?: true
    attendancePresent?: true
    attendanceAbsent?: true
  }

  export type StudentAcademicHistorySumAggregateInputType = {
    rollNumber?: true
    attendancePresent?: true
    attendanceAbsent?: true
  }

  export type StudentAcademicHistoryMinAggregateInputType = {
    id?: true
    academicYear?: true
    class?: true
    section?: true
    rollNumber?: true
    classTeacher?: true
    promotionStatus?: true
    attendancePresent?: true
    attendanceAbsent?: true
    finalGrade?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
    studentId?: true
  }

  export type StudentAcademicHistoryMaxAggregateInputType = {
    id?: true
    academicYear?: true
    class?: true
    section?: true
    rollNumber?: true
    classTeacher?: true
    promotionStatus?: true
    attendancePresent?: true
    attendanceAbsent?: true
    finalGrade?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
    studentId?: true
  }

  export type StudentAcademicHistoryCountAggregateInputType = {
    id?: true
    academicYear?: true
    class?: true
    section?: true
    rollNumber?: true
    classTeacher?: true
    promotionStatus?: true
    attendancePresent?: true
    attendanceAbsent?: true
    finalGrade?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
    studentId?: true
    _all?: true
  }

  export type StudentAcademicHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAcademicHistory to aggregate.
     */
    where?: StudentAcademicHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAcademicHistories to fetch.
     */
    orderBy?: StudentAcademicHistoryOrderByWithRelationInput | StudentAcademicHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentAcademicHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAcademicHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAcademicHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentAcademicHistories
    **/
    _count?: true | StudentAcademicHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAcademicHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentAcademicHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentAcademicHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentAcademicHistoryMaxAggregateInputType
  }

  export type GetStudentAcademicHistoryAggregateType<T extends StudentAcademicHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentAcademicHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentAcademicHistory[P]>
      : GetScalarType<T[P], AggregateStudentAcademicHistory[P]>
  }




  export type StudentAcademicHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAcademicHistoryWhereInput
    orderBy?: StudentAcademicHistoryOrderByWithAggregationInput | StudentAcademicHistoryOrderByWithAggregationInput[]
    by: StudentAcademicHistoryScalarFieldEnum[] | StudentAcademicHistoryScalarFieldEnum
    having?: StudentAcademicHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentAcademicHistoryCountAggregateInputType | true
    _avg?: StudentAcademicHistoryAvgAggregateInputType
    _sum?: StudentAcademicHistorySumAggregateInputType
    _min?: StudentAcademicHistoryMinAggregateInputType
    _max?: StudentAcademicHistoryMaxAggregateInputType
  }

  export type StudentAcademicHistoryGroupByOutputType = {
    id: string
    academicYear: string
    class: string
    section: string
    rollNumber: number
    classTeacher: string | null
    promotionStatus: string
    attendancePresent: number
    attendanceAbsent: number
    finalGrade: string | null
    remarks: string | null
    createdAt: Date
    updatedAt: Date
    studentId: string
    _count: StudentAcademicHistoryCountAggregateOutputType | null
    _avg: StudentAcademicHistoryAvgAggregateOutputType | null
    _sum: StudentAcademicHistorySumAggregateOutputType | null
    _min: StudentAcademicHistoryMinAggregateOutputType | null
    _max: StudentAcademicHistoryMaxAggregateOutputType | null
  }

  type GetStudentAcademicHistoryGroupByPayload<T extends StudentAcademicHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentAcademicHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentAcademicHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentAcademicHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], StudentAcademicHistoryGroupByOutputType[P]>
        }
      >
    >


  export type StudentAcademicHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    academicYear?: boolean
    class?: boolean
    section?: boolean
    rollNumber?: boolean
    classTeacher?: boolean
    promotionStatus?: boolean
    attendancePresent?: boolean
    attendanceAbsent?: boolean
    finalGrade?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentAcademicHistory"]>

  export type StudentAcademicHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    academicYear?: boolean
    class?: boolean
    section?: boolean
    rollNumber?: boolean
    classTeacher?: boolean
    promotionStatus?: boolean
    attendancePresent?: boolean
    attendanceAbsent?: boolean
    finalGrade?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentAcademicHistory"]>

  export type StudentAcademicHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    academicYear?: boolean
    class?: boolean
    section?: boolean
    rollNumber?: boolean
    classTeacher?: boolean
    promotionStatus?: boolean
    attendancePresent?: boolean
    attendanceAbsent?: boolean
    finalGrade?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentAcademicHistory"]>

  export type StudentAcademicHistorySelectScalar = {
    id?: boolean
    academicYear?: boolean
    class?: boolean
    section?: boolean
    rollNumber?: boolean
    classTeacher?: boolean
    promotionStatus?: boolean
    attendancePresent?: boolean
    attendanceAbsent?: boolean
    finalGrade?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentId?: boolean
  }

  export type StudentAcademicHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "academicYear" | "class" | "section" | "rollNumber" | "classTeacher" | "promotionStatus" | "attendancePresent" | "attendanceAbsent" | "finalGrade" | "remarks" | "createdAt" | "updatedAt" | "studentId", ExtArgs["result"]["studentAcademicHistory"]>
  export type StudentAcademicHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type StudentAcademicHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type StudentAcademicHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $StudentAcademicHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentAcademicHistory"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      academicYear: string
      class: string
      section: string
      rollNumber: number
      classTeacher: string | null
      promotionStatus: string
      attendancePresent: number
      attendanceAbsent: number
      finalGrade: string | null
      remarks: string | null
      createdAt: Date
      updatedAt: Date
      studentId: string
    }, ExtArgs["result"]["studentAcademicHistory"]>
    composites: {}
  }

  type StudentAcademicHistoryGetPayload<S extends boolean | null | undefined | StudentAcademicHistoryDefaultArgs> = $Result.GetResult<Prisma.$StudentAcademicHistoryPayload, S>

  type StudentAcademicHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentAcademicHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentAcademicHistoryCountAggregateInputType | true
    }

  export interface StudentAcademicHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentAcademicHistory'], meta: { name: 'StudentAcademicHistory' } }
    /**
     * Find zero or one StudentAcademicHistory that matches the filter.
     * @param {StudentAcademicHistoryFindUniqueArgs} args - Arguments to find a StudentAcademicHistory
     * @example
     * // Get one StudentAcademicHistory
     * const studentAcademicHistory = await prisma.studentAcademicHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentAcademicHistoryFindUniqueArgs>(args: SelectSubset<T, StudentAcademicHistoryFindUniqueArgs<ExtArgs>>): Prisma__StudentAcademicHistoryClient<$Result.GetResult<Prisma.$StudentAcademicHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentAcademicHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentAcademicHistoryFindUniqueOrThrowArgs} args - Arguments to find a StudentAcademicHistory
     * @example
     * // Get one StudentAcademicHistory
     * const studentAcademicHistory = await prisma.studentAcademicHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentAcademicHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentAcademicHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentAcademicHistoryClient<$Result.GetResult<Prisma.$StudentAcademicHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentAcademicHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAcademicHistoryFindFirstArgs} args - Arguments to find a StudentAcademicHistory
     * @example
     * // Get one StudentAcademicHistory
     * const studentAcademicHistory = await prisma.studentAcademicHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentAcademicHistoryFindFirstArgs>(args?: SelectSubset<T, StudentAcademicHistoryFindFirstArgs<ExtArgs>>): Prisma__StudentAcademicHistoryClient<$Result.GetResult<Prisma.$StudentAcademicHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentAcademicHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAcademicHistoryFindFirstOrThrowArgs} args - Arguments to find a StudentAcademicHistory
     * @example
     * // Get one StudentAcademicHistory
     * const studentAcademicHistory = await prisma.studentAcademicHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentAcademicHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentAcademicHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentAcademicHistoryClient<$Result.GetResult<Prisma.$StudentAcademicHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentAcademicHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAcademicHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentAcademicHistories
     * const studentAcademicHistories = await prisma.studentAcademicHistory.findMany()
     * 
     * // Get first 10 StudentAcademicHistories
     * const studentAcademicHistories = await prisma.studentAcademicHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentAcademicHistoryWithIdOnly = await prisma.studentAcademicHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentAcademicHistoryFindManyArgs>(args?: SelectSubset<T, StudentAcademicHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAcademicHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentAcademicHistory.
     * @param {StudentAcademicHistoryCreateArgs} args - Arguments to create a StudentAcademicHistory.
     * @example
     * // Create one StudentAcademicHistory
     * const StudentAcademicHistory = await prisma.studentAcademicHistory.create({
     *   data: {
     *     // ... data to create a StudentAcademicHistory
     *   }
     * })
     * 
     */
    create<T extends StudentAcademicHistoryCreateArgs>(args: SelectSubset<T, StudentAcademicHistoryCreateArgs<ExtArgs>>): Prisma__StudentAcademicHistoryClient<$Result.GetResult<Prisma.$StudentAcademicHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentAcademicHistories.
     * @param {StudentAcademicHistoryCreateManyArgs} args - Arguments to create many StudentAcademicHistories.
     * @example
     * // Create many StudentAcademicHistories
     * const studentAcademicHistory = await prisma.studentAcademicHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentAcademicHistoryCreateManyArgs>(args?: SelectSubset<T, StudentAcademicHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentAcademicHistories and returns the data saved in the database.
     * @param {StudentAcademicHistoryCreateManyAndReturnArgs} args - Arguments to create many StudentAcademicHistories.
     * @example
     * // Create many StudentAcademicHistories
     * const studentAcademicHistory = await prisma.studentAcademicHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentAcademicHistories and only return the `id`
     * const studentAcademicHistoryWithIdOnly = await prisma.studentAcademicHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentAcademicHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentAcademicHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAcademicHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentAcademicHistory.
     * @param {StudentAcademicHistoryDeleteArgs} args - Arguments to delete one StudentAcademicHistory.
     * @example
     * // Delete one StudentAcademicHistory
     * const StudentAcademicHistory = await prisma.studentAcademicHistory.delete({
     *   where: {
     *     // ... filter to delete one StudentAcademicHistory
     *   }
     * })
     * 
     */
    delete<T extends StudentAcademicHistoryDeleteArgs>(args: SelectSubset<T, StudentAcademicHistoryDeleteArgs<ExtArgs>>): Prisma__StudentAcademicHistoryClient<$Result.GetResult<Prisma.$StudentAcademicHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentAcademicHistory.
     * @param {StudentAcademicHistoryUpdateArgs} args - Arguments to update one StudentAcademicHistory.
     * @example
     * // Update one StudentAcademicHistory
     * const studentAcademicHistory = await prisma.studentAcademicHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentAcademicHistoryUpdateArgs>(args: SelectSubset<T, StudentAcademicHistoryUpdateArgs<ExtArgs>>): Prisma__StudentAcademicHistoryClient<$Result.GetResult<Prisma.$StudentAcademicHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentAcademicHistories.
     * @param {StudentAcademicHistoryDeleteManyArgs} args - Arguments to filter StudentAcademicHistories to delete.
     * @example
     * // Delete a few StudentAcademicHistories
     * const { count } = await prisma.studentAcademicHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentAcademicHistoryDeleteManyArgs>(args?: SelectSubset<T, StudentAcademicHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentAcademicHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAcademicHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentAcademicHistories
     * const studentAcademicHistory = await prisma.studentAcademicHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentAcademicHistoryUpdateManyArgs>(args: SelectSubset<T, StudentAcademicHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentAcademicHistories and returns the data updated in the database.
     * @param {StudentAcademicHistoryUpdateManyAndReturnArgs} args - Arguments to update many StudentAcademicHistories.
     * @example
     * // Update many StudentAcademicHistories
     * const studentAcademicHistory = await prisma.studentAcademicHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentAcademicHistories and only return the `id`
     * const studentAcademicHistoryWithIdOnly = await prisma.studentAcademicHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentAcademicHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentAcademicHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAcademicHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentAcademicHistory.
     * @param {StudentAcademicHistoryUpsertArgs} args - Arguments to update or create a StudentAcademicHistory.
     * @example
     * // Update or create a StudentAcademicHistory
     * const studentAcademicHistory = await prisma.studentAcademicHistory.upsert({
     *   create: {
     *     // ... data to create a StudentAcademicHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentAcademicHistory we want to update
     *   }
     * })
     */
    upsert<T extends StudentAcademicHistoryUpsertArgs>(args: SelectSubset<T, StudentAcademicHistoryUpsertArgs<ExtArgs>>): Prisma__StudentAcademicHistoryClient<$Result.GetResult<Prisma.$StudentAcademicHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentAcademicHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAcademicHistoryCountArgs} args - Arguments to filter StudentAcademicHistories to count.
     * @example
     * // Count the number of StudentAcademicHistories
     * const count = await prisma.studentAcademicHistory.count({
     *   where: {
     *     // ... the filter for the StudentAcademicHistories we want to count
     *   }
     * })
    **/
    count<T extends StudentAcademicHistoryCountArgs>(
      args?: Subset<T, StudentAcademicHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentAcademicHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentAcademicHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAcademicHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAcademicHistoryAggregateArgs>(args: Subset<T, StudentAcademicHistoryAggregateArgs>): Prisma.PrismaPromise<GetStudentAcademicHistoryAggregateType<T>>

    /**
     * Group by StudentAcademicHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAcademicHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentAcademicHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentAcademicHistoryGroupByArgs['orderBy'] }
        : { orderBy?: StudentAcademicHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentAcademicHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentAcademicHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentAcademicHistory model
   */
  readonly fields: StudentAcademicHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentAcademicHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentAcademicHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentAcademicHistory model
   */
  interface StudentAcademicHistoryFieldRefs {
    readonly id: FieldRef<"StudentAcademicHistory", 'String'>
    readonly academicYear: FieldRef<"StudentAcademicHistory", 'String'>
    readonly class: FieldRef<"StudentAcademicHistory", 'String'>
    readonly section: FieldRef<"StudentAcademicHistory", 'String'>
    readonly rollNumber: FieldRef<"StudentAcademicHistory", 'Int'>
    readonly classTeacher: FieldRef<"StudentAcademicHistory", 'String'>
    readonly promotionStatus: FieldRef<"StudentAcademicHistory", 'String'>
    readonly attendancePresent: FieldRef<"StudentAcademicHistory", 'Int'>
    readonly attendanceAbsent: FieldRef<"StudentAcademicHistory", 'Int'>
    readonly finalGrade: FieldRef<"StudentAcademicHistory", 'String'>
    readonly remarks: FieldRef<"StudentAcademicHistory", 'String'>
    readonly createdAt: FieldRef<"StudentAcademicHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentAcademicHistory", 'DateTime'>
    readonly studentId: FieldRef<"StudentAcademicHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StudentAcademicHistory findUnique
   */
  export type StudentAcademicHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicHistory
     */
    select?: StudentAcademicHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicHistory
     */
    omit?: StudentAcademicHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StudentAcademicHistory to fetch.
     */
    where: StudentAcademicHistoryWhereUniqueInput
  }

  /**
   * StudentAcademicHistory findUniqueOrThrow
   */
  export type StudentAcademicHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicHistory
     */
    select?: StudentAcademicHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicHistory
     */
    omit?: StudentAcademicHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StudentAcademicHistory to fetch.
     */
    where: StudentAcademicHistoryWhereUniqueInput
  }

  /**
   * StudentAcademicHistory findFirst
   */
  export type StudentAcademicHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicHistory
     */
    select?: StudentAcademicHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicHistory
     */
    omit?: StudentAcademicHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StudentAcademicHistory to fetch.
     */
    where?: StudentAcademicHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAcademicHistories to fetch.
     */
    orderBy?: StudentAcademicHistoryOrderByWithRelationInput | StudentAcademicHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAcademicHistories.
     */
    cursor?: StudentAcademicHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAcademicHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAcademicHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAcademicHistories.
     */
    distinct?: StudentAcademicHistoryScalarFieldEnum | StudentAcademicHistoryScalarFieldEnum[]
  }

  /**
   * StudentAcademicHistory findFirstOrThrow
   */
  export type StudentAcademicHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicHistory
     */
    select?: StudentAcademicHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicHistory
     */
    omit?: StudentAcademicHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StudentAcademicHistory to fetch.
     */
    where?: StudentAcademicHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAcademicHistories to fetch.
     */
    orderBy?: StudentAcademicHistoryOrderByWithRelationInput | StudentAcademicHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAcademicHistories.
     */
    cursor?: StudentAcademicHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAcademicHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAcademicHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAcademicHistories.
     */
    distinct?: StudentAcademicHistoryScalarFieldEnum | StudentAcademicHistoryScalarFieldEnum[]
  }

  /**
   * StudentAcademicHistory findMany
   */
  export type StudentAcademicHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicHistory
     */
    select?: StudentAcademicHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicHistory
     */
    omit?: StudentAcademicHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StudentAcademicHistories to fetch.
     */
    where?: StudentAcademicHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAcademicHistories to fetch.
     */
    orderBy?: StudentAcademicHistoryOrderByWithRelationInput | StudentAcademicHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentAcademicHistories.
     */
    cursor?: StudentAcademicHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAcademicHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAcademicHistories.
     */
    skip?: number
    distinct?: StudentAcademicHistoryScalarFieldEnum | StudentAcademicHistoryScalarFieldEnum[]
  }

  /**
   * StudentAcademicHistory create
   */
  export type StudentAcademicHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicHistory
     */
    select?: StudentAcademicHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicHistory
     */
    omit?: StudentAcademicHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentAcademicHistory.
     */
    data: XOR<StudentAcademicHistoryCreateInput, StudentAcademicHistoryUncheckedCreateInput>
  }

  /**
   * StudentAcademicHistory createMany
   */
  export type StudentAcademicHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentAcademicHistories.
     */
    data: StudentAcademicHistoryCreateManyInput | StudentAcademicHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentAcademicHistory createManyAndReturn
   */
  export type StudentAcademicHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicHistory
     */
    select?: StudentAcademicHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicHistory
     */
    omit?: StudentAcademicHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many StudentAcademicHistories.
     */
    data: StudentAcademicHistoryCreateManyInput | StudentAcademicHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentAcademicHistory update
   */
  export type StudentAcademicHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicHistory
     */
    select?: StudentAcademicHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicHistory
     */
    omit?: StudentAcademicHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentAcademicHistory.
     */
    data: XOR<StudentAcademicHistoryUpdateInput, StudentAcademicHistoryUncheckedUpdateInput>
    /**
     * Choose, which StudentAcademicHistory to update.
     */
    where: StudentAcademicHistoryWhereUniqueInput
  }

  /**
   * StudentAcademicHistory updateMany
   */
  export type StudentAcademicHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentAcademicHistories.
     */
    data: XOR<StudentAcademicHistoryUpdateManyMutationInput, StudentAcademicHistoryUncheckedUpdateManyInput>
    /**
     * Filter which StudentAcademicHistories to update
     */
    where?: StudentAcademicHistoryWhereInput
    /**
     * Limit how many StudentAcademicHistories to update.
     */
    limit?: number
  }

  /**
   * StudentAcademicHistory updateManyAndReturn
   */
  export type StudentAcademicHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicHistory
     */
    select?: StudentAcademicHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicHistory
     */
    omit?: StudentAcademicHistoryOmit<ExtArgs> | null
    /**
     * The data used to update StudentAcademicHistories.
     */
    data: XOR<StudentAcademicHistoryUpdateManyMutationInput, StudentAcademicHistoryUncheckedUpdateManyInput>
    /**
     * Filter which StudentAcademicHistories to update
     */
    where?: StudentAcademicHistoryWhereInput
    /**
     * Limit how many StudentAcademicHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentAcademicHistory upsert
   */
  export type StudentAcademicHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicHistory
     */
    select?: StudentAcademicHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicHistory
     */
    omit?: StudentAcademicHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentAcademicHistory to update in case it exists.
     */
    where: StudentAcademicHistoryWhereUniqueInput
    /**
     * In case the StudentAcademicHistory found by the `where` argument doesn't exist, create a new StudentAcademicHistory with this data.
     */
    create: XOR<StudentAcademicHistoryCreateInput, StudentAcademicHistoryUncheckedCreateInput>
    /**
     * In case the StudentAcademicHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentAcademicHistoryUpdateInput, StudentAcademicHistoryUncheckedUpdateInput>
  }

  /**
   * StudentAcademicHistory delete
   */
  export type StudentAcademicHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicHistory
     */
    select?: StudentAcademicHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicHistory
     */
    omit?: StudentAcademicHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicHistoryInclude<ExtArgs> | null
    /**
     * Filter which StudentAcademicHistory to delete.
     */
    where: StudentAcademicHistoryWhereUniqueInput
  }

  /**
   * StudentAcademicHistory deleteMany
   */
  export type StudentAcademicHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAcademicHistories to delete
     */
    where?: StudentAcademicHistoryWhereInput
    /**
     * Limit how many StudentAcademicHistories to delete.
     */
    limit?: number
  }

  /**
   * StudentAcademicHistory without action
   */
  export type StudentAcademicHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicHistory
     */
    select?: StudentAcademicHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicHistory
     */
    omit?: StudentAcademicHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Parent
   */

  export type AggregateParent = {
    _count: ParentCountAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  export type ParentMinAggregateOutputType = {
    id: string | null
    fatherName: string | null
    fatherOccupation: string | null
    fatherMobile: string | null
    fatherEmail: string | null
    fatherAadhar: string | null
    motherName: string | null
    motherOccupation: string | null
    motherMobile: string | null
    motherEmail: string | null
    motherAadhar: string | null
    guardianName: string | null
    guardianRelation: string | null
    guardianMobile: string | null
    guardianEmail: string | null
    primaryContact: string | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    pinCode: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
    schoolId: string | null
  }

  export type ParentMaxAggregateOutputType = {
    id: string | null
    fatherName: string | null
    fatherOccupation: string | null
    fatherMobile: string | null
    fatherEmail: string | null
    fatherAadhar: string | null
    motherName: string | null
    motherOccupation: string | null
    motherMobile: string | null
    motherEmail: string | null
    motherAadhar: string | null
    guardianName: string | null
    guardianRelation: string | null
    guardianMobile: string | null
    guardianEmail: string | null
    primaryContact: string | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    pinCode: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
    schoolId: string | null
  }

  export type ParentCountAggregateOutputType = {
    id: number
    fatherName: number
    fatherOccupation: number
    fatherMobile: number
    fatherEmail: number
    fatherAadhar: number
    motherName: number
    motherOccupation: number
    motherMobile: number
    motherEmail: number
    motherAadhar: number
    guardianName: number
    guardianRelation: number
    guardianMobile: number
    guardianEmail: number
    primaryContact: number
    addressLine1: number
    addressLine2: number
    city: number
    state: number
    pinCode: number
    country: number
    createdAt: number
    updatedAt: number
    schoolId: number
    _all: number
  }


  export type ParentMinAggregateInputType = {
    id?: true
    fatherName?: true
    fatherOccupation?: true
    fatherMobile?: true
    fatherEmail?: true
    fatherAadhar?: true
    motherName?: true
    motherOccupation?: true
    motherMobile?: true
    motherEmail?: true
    motherAadhar?: true
    guardianName?: true
    guardianRelation?: true
    guardianMobile?: true
    guardianEmail?: true
    primaryContact?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    pinCode?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    schoolId?: true
  }

  export type ParentMaxAggregateInputType = {
    id?: true
    fatherName?: true
    fatherOccupation?: true
    fatherMobile?: true
    fatherEmail?: true
    fatherAadhar?: true
    motherName?: true
    motherOccupation?: true
    motherMobile?: true
    motherEmail?: true
    motherAadhar?: true
    guardianName?: true
    guardianRelation?: true
    guardianMobile?: true
    guardianEmail?: true
    primaryContact?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    pinCode?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    schoolId?: true
  }

  export type ParentCountAggregateInputType = {
    id?: true
    fatherName?: true
    fatherOccupation?: true
    fatherMobile?: true
    fatherEmail?: true
    fatherAadhar?: true
    motherName?: true
    motherOccupation?: true
    motherMobile?: true
    motherEmail?: true
    motherAadhar?: true
    guardianName?: true
    guardianRelation?: true
    guardianMobile?: true
    guardianEmail?: true
    primaryContact?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    pinCode?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    schoolId?: true
    _all?: true
  }

  export type ParentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parent to aggregate.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parents
    **/
    _count?: true | ParentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParentMaxAggregateInputType
  }

  export type GetParentAggregateType<T extends ParentAggregateArgs> = {
        [P in keyof T & keyof AggregateParent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParent[P]>
      : GetScalarType<T[P], AggregateParent[P]>
  }




  export type ParentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentWhereInput
    orderBy?: ParentOrderByWithAggregationInput | ParentOrderByWithAggregationInput[]
    by: ParentScalarFieldEnum[] | ParentScalarFieldEnum
    having?: ParentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParentCountAggregateInputType | true
    _min?: ParentMinAggregateInputType
    _max?: ParentMaxAggregateInputType
  }

  export type ParentGroupByOutputType = {
    id: string
    fatherName: string
    fatherOccupation: string | null
    fatherMobile: string
    fatherEmail: string | null
    fatherAadhar: string | null
    motherName: string
    motherOccupation: string | null
    motherMobile: string
    motherEmail: string | null
    motherAadhar: string | null
    guardianName: string | null
    guardianRelation: string | null
    guardianMobile: string | null
    guardianEmail: string | null
    primaryContact: string
    addressLine1: string
    addressLine2: string | null
    city: string
    state: string
    pinCode: string
    country: string
    createdAt: Date
    updatedAt: Date
    schoolId: string
    _count: ParentCountAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  type GetParentGroupByPayload<T extends ParentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParentGroupByOutputType[P]>
            : GetScalarType<T[P], ParentGroupByOutputType[P]>
        }
      >
    >


  export type ParentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fatherName?: boolean
    fatherOccupation?: boolean
    fatherMobile?: boolean
    fatherEmail?: boolean
    fatherAadhar?: boolean
    motherName?: boolean
    motherOccupation?: boolean
    motherMobile?: boolean
    motherEmail?: boolean
    motherAadhar?: boolean
    guardianName?: boolean
    guardianRelation?: boolean
    guardianMobile?: boolean
    guardianEmail?: boolean
    primaryContact?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    pinCode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schoolId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    students?: boolean | Parent$studentsArgs<ExtArgs>
    _count?: boolean | ParentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fatherName?: boolean
    fatherOccupation?: boolean
    fatherMobile?: boolean
    fatherEmail?: boolean
    fatherAadhar?: boolean
    motherName?: boolean
    motherOccupation?: boolean
    motherMobile?: boolean
    motherEmail?: boolean
    motherAadhar?: boolean
    guardianName?: boolean
    guardianRelation?: boolean
    guardianMobile?: boolean
    guardianEmail?: boolean
    primaryContact?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    pinCode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schoolId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fatherName?: boolean
    fatherOccupation?: boolean
    fatherMobile?: boolean
    fatherEmail?: boolean
    fatherAadhar?: boolean
    motherName?: boolean
    motherOccupation?: boolean
    motherMobile?: boolean
    motherEmail?: boolean
    motherAadhar?: boolean
    guardianName?: boolean
    guardianRelation?: boolean
    guardianMobile?: boolean
    guardianEmail?: boolean
    primaryContact?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    pinCode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schoolId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectScalar = {
    id?: boolean
    fatherName?: boolean
    fatherOccupation?: boolean
    fatherMobile?: boolean
    fatherEmail?: boolean
    fatherAadhar?: boolean
    motherName?: boolean
    motherOccupation?: boolean
    motherMobile?: boolean
    motherEmail?: boolean
    motherAadhar?: boolean
    guardianName?: boolean
    guardianRelation?: boolean
    guardianMobile?: boolean
    guardianEmail?: boolean
    primaryContact?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    pinCode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schoolId?: boolean
  }

  export type ParentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fatherName" | "fatherOccupation" | "fatherMobile" | "fatherEmail" | "fatherAadhar" | "motherName" | "motherOccupation" | "motherMobile" | "motherEmail" | "motherAadhar" | "guardianName" | "guardianRelation" | "guardianMobile" | "guardianEmail" | "primaryContact" | "addressLine1" | "addressLine2" | "city" | "state" | "pinCode" | "country" | "createdAt" | "updatedAt" | "schoolId", ExtArgs["result"]["parent"]>
  export type ParentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    students?: boolean | Parent$studentsArgs<ExtArgs>
    _count?: boolean | ParentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type ParentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $ParentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parent"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fatherName: string
      fatherOccupation: string | null
      fatherMobile: string
      fatherEmail: string | null
      fatherAadhar: string | null
      motherName: string
      motherOccupation: string | null
      motherMobile: string
      motherEmail: string | null
      motherAadhar: string | null
      guardianName: string | null
      guardianRelation: string | null
      guardianMobile: string | null
      guardianEmail: string | null
      primaryContact: string
      addressLine1: string
      addressLine2: string | null
      city: string
      state: string
      pinCode: string
      country: string
      createdAt: Date
      updatedAt: Date
      schoolId: string
    }, ExtArgs["result"]["parent"]>
    composites: {}
  }

  type ParentGetPayload<S extends boolean | null | undefined | ParentDefaultArgs> = $Result.GetResult<Prisma.$ParentPayload, S>

  type ParentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParentCountAggregateInputType | true
    }

  export interface ParentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parent'], meta: { name: 'Parent' } }
    /**
     * Find zero or one Parent that matches the filter.
     * @param {ParentFindUniqueArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParentFindUniqueArgs>(args: SelectSubset<T, ParentFindUniqueArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParentFindUniqueOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParentFindUniqueOrThrowArgs>(args: SelectSubset<T, ParentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParentFindFirstArgs>(args?: SelectSubset<T, ParentFindFirstArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParentFindFirstOrThrowArgs>(args?: SelectSubset<T, ParentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parents
     * const parents = await prisma.parent.findMany()
     * 
     * // Get first 10 Parents
     * const parents = await prisma.parent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parentWithIdOnly = await prisma.parent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParentFindManyArgs>(args?: SelectSubset<T, ParentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parent.
     * @param {ParentCreateArgs} args - Arguments to create a Parent.
     * @example
     * // Create one Parent
     * const Parent = await prisma.parent.create({
     *   data: {
     *     // ... data to create a Parent
     *   }
     * })
     * 
     */
    create<T extends ParentCreateArgs>(args: SelectSubset<T, ParentCreateArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parents.
     * @param {ParentCreateManyArgs} args - Arguments to create many Parents.
     * @example
     * // Create many Parents
     * const parent = await prisma.parent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParentCreateManyArgs>(args?: SelectSubset<T, ParentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parents and returns the data saved in the database.
     * @param {ParentCreateManyAndReturnArgs} args - Arguments to create many Parents.
     * @example
     * // Create many Parents
     * const parent = await prisma.parent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parents and only return the `id`
     * const parentWithIdOnly = await prisma.parent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParentCreateManyAndReturnArgs>(args?: SelectSubset<T, ParentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parent.
     * @param {ParentDeleteArgs} args - Arguments to delete one Parent.
     * @example
     * // Delete one Parent
     * const Parent = await prisma.parent.delete({
     *   where: {
     *     // ... filter to delete one Parent
     *   }
     * })
     * 
     */
    delete<T extends ParentDeleteArgs>(args: SelectSubset<T, ParentDeleteArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parent.
     * @param {ParentUpdateArgs} args - Arguments to update one Parent.
     * @example
     * // Update one Parent
     * const parent = await prisma.parent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParentUpdateArgs>(args: SelectSubset<T, ParentUpdateArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parents.
     * @param {ParentDeleteManyArgs} args - Arguments to filter Parents to delete.
     * @example
     * // Delete a few Parents
     * const { count } = await prisma.parent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParentDeleteManyArgs>(args?: SelectSubset<T, ParentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParentUpdateManyArgs>(args: SelectSubset<T, ParentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents and returns the data updated in the database.
     * @param {ParentUpdateManyAndReturnArgs} args - Arguments to update many Parents.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parents and only return the `id`
     * const parentWithIdOnly = await prisma.parent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParentUpdateManyAndReturnArgs>(args: SelectSubset<T, ParentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parent.
     * @param {ParentUpsertArgs} args - Arguments to update or create a Parent.
     * @example
     * // Update or create a Parent
     * const parent = await prisma.parent.upsert({
     *   create: {
     *     // ... data to create a Parent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parent we want to update
     *   }
     * })
     */
    upsert<T extends ParentUpsertArgs>(args: SelectSubset<T, ParentUpsertArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentCountArgs} args - Arguments to filter Parents to count.
     * @example
     * // Count the number of Parents
     * const count = await prisma.parent.count({
     *   where: {
     *     // ... the filter for the Parents we want to count
     *   }
     * })
    **/
    count<T extends ParentCountArgs>(
      args?: Subset<T, ParentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParentAggregateArgs>(args: Subset<T, ParentAggregateArgs>): Prisma.PrismaPromise<GetParentAggregateType<T>>

    /**
     * Group by Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParentGroupByArgs['orderBy'] }
        : { orderBy?: ParentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parent model
   */
  readonly fields: ParentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends Parent$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Parent$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Parent model
   */
  interface ParentFieldRefs {
    readonly id: FieldRef<"Parent", 'String'>
    readonly fatherName: FieldRef<"Parent", 'String'>
    readonly fatherOccupation: FieldRef<"Parent", 'String'>
    readonly fatherMobile: FieldRef<"Parent", 'String'>
    readonly fatherEmail: FieldRef<"Parent", 'String'>
    readonly fatherAadhar: FieldRef<"Parent", 'String'>
    readonly motherName: FieldRef<"Parent", 'String'>
    readonly motherOccupation: FieldRef<"Parent", 'String'>
    readonly motherMobile: FieldRef<"Parent", 'String'>
    readonly motherEmail: FieldRef<"Parent", 'String'>
    readonly motherAadhar: FieldRef<"Parent", 'String'>
    readonly guardianName: FieldRef<"Parent", 'String'>
    readonly guardianRelation: FieldRef<"Parent", 'String'>
    readonly guardianMobile: FieldRef<"Parent", 'String'>
    readonly guardianEmail: FieldRef<"Parent", 'String'>
    readonly primaryContact: FieldRef<"Parent", 'String'>
    readonly addressLine1: FieldRef<"Parent", 'String'>
    readonly addressLine2: FieldRef<"Parent", 'String'>
    readonly city: FieldRef<"Parent", 'String'>
    readonly state: FieldRef<"Parent", 'String'>
    readonly pinCode: FieldRef<"Parent", 'String'>
    readonly country: FieldRef<"Parent", 'String'>
    readonly createdAt: FieldRef<"Parent", 'DateTime'>
    readonly updatedAt: FieldRef<"Parent", 'DateTime'>
    readonly schoolId: FieldRef<"Parent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Parent findUnique
   */
  export type ParentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent findUniqueOrThrow
   */
  export type ParentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent findFirst
   */
  export type ParentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent findFirstOrThrow
   */
  export type ParentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent findMany
   */
  export type ParentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parents to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent create
   */
  export type ParentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The data needed to create a Parent.
     */
    data: XOR<ParentCreateInput, ParentUncheckedCreateInput>
  }

  /**
   * Parent createMany
   */
  export type ParentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parents.
     */
    data: ParentCreateManyInput | ParentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parent createManyAndReturn
   */
  export type ParentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * The data used to create many Parents.
     */
    data: ParentCreateManyInput | ParentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parent update
   */
  export type ParentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The data needed to update a Parent.
     */
    data: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
    /**
     * Choose, which Parent to update.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent updateMany
   */
  export type ParentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parents.
     */
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyInput>
    /**
     * Filter which Parents to update
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to update.
     */
    limit?: number
  }

  /**
   * Parent updateManyAndReturn
   */
  export type ParentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * The data used to update Parents.
     */
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyInput>
    /**
     * Filter which Parents to update
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parent upsert
   */
  export type ParentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The filter to search for the Parent to update in case it exists.
     */
    where: ParentWhereUniqueInput
    /**
     * In case the Parent found by the `where` argument doesn't exist, create a new Parent with this data.
     */
    create: XOR<ParentCreateInput, ParentUncheckedCreateInput>
    /**
     * In case the Parent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
  }

  /**
   * Parent delete
   */
  export type ParentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter which Parent to delete.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent deleteMany
   */
  export type ParentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parents to delete
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to delete.
     */
    limit?: number
  }

  /**
   * Parent.students
   */
  export type Parent$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Parent without action
   */
  export type ParentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type DocumentSumAggregateOutputType = {
    fileSize: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    documentType: string | null
    documentUrl: string | null
    fileName: string | null
    fileSize: number | null
    mimeType: string | null
    verificationStatus: string | null
    verifiedBy: string | null
    verifiedAt: Date | null
    rejectionReason: string | null
    uploadedAt: Date | null
    updatedAt: Date | null
    studentId: string | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    documentType: string | null
    documentUrl: string | null
    fileName: string | null
    fileSize: number | null
    mimeType: string | null
    verificationStatus: string | null
    verifiedBy: string | null
    verifiedAt: Date | null
    rejectionReason: string | null
    uploadedAt: Date | null
    updatedAt: Date | null
    studentId: string | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    documentType: number
    documentUrl: number
    fileName: number
    fileSize: number
    mimeType: number
    verificationStatus: number
    verifiedBy: number
    verifiedAt: number
    rejectionReason: number
    uploadedAt: number
    updatedAt: number
    studentId: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    fileSize?: true
  }

  export type DocumentSumAggregateInputType = {
    fileSize?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    documentType?: true
    documentUrl?: true
    fileName?: true
    fileSize?: true
    mimeType?: true
    verificationStatus?: true
    verifiedBy?: true
    verifiedAt?: true
    rejectionReason?: true
    uploadedAt?: true
    updatedAt?: true
    studentId?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    documentType?: true
    documentUrl?: true
    fileName?: true
    fileSize?: true
    mimeType?: true
    verificationStatus?: true
    verifiedBy?: true
    verifiedAt?: true
    rejectionReason?: true
    uploadedAt?: true
    updatedAt?: true
    studentId?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    documentType?: true
    documentUrl?: true
    fileName?: true
    fileSize?: true
    mimeType?: true
    verificationStatus?: true
    verifiedBy?: true
    verifiedAt?: true
    rejectionReason?: true
    uploadedAt?: true
    updatedAt?: true
    studentId?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    documentType: string
    documentUrl: string
    fileName: string
    fileSize: number
    mimeType: string
    verificationStatus: string
    verifiedBy: string | null
    verifiedAt: Date | null
    rejectionReason: string | null
    uploadedAt: Date
    updatedAt: Date
    studentId: string
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentType?: boolean
    documentUrl?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    verificationStatus?: boolean
    verifiedBy?: boolean
    verifiedAt?: boolean
    rejectionReason?: boolean
    uploadedAt?: boolean
    updatedAt?: boolean
    studentId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentType?: boolean
    documentUrl?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    verificationStatus?: boolean
    verifiedBy?: boolean
    verifiedAt?: boolean
    rejectionReason?: boolean
    uploadedAt?: boolean
    updatedAt?: boolean
    studentId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentType?: boolean
    documentUrl?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    verificationStatus?: boolean
    verifiedBy?: boolean
    verifiedAt?: boolean
    rejectionReason?: boolean
    uploadedAt?: boolean
    updatedAt?: boolean
    studentId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    documentType?: boolean
    documentUrl?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    verificationStatus?: boolean
    verifiedBy?: boolean
    verifiedAt?: boolean
    rejectionReason?: boolean
    uploadedAt?: boolean
    updatedAt?: boolean
    studentId?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentType" | "documentUrl" | "fileName" | "fileSize" | "mimeType" | "verificationStatus" | "verifiedBy" | "verifiedAt" | "rejectionReason" | "uploadedAt" | "updatedAt" | "studentId", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentType: string
      documentUrl: string
      fileName: string
      fileSize: number
      mimeType: string
      verificationStatus: string
      verifiedBy: string | null
      verifiedAt: Date | null
      rejectionReason: string | null
      uploadedAt: Date
      updatedAt: Date
      studentId: string
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly documentType: FieldRef<"Document", 'String'>
    readonly documentUrl: FieldRef<"Document", 'String'>
    readonly fileName: FieldRef<"Document", 'String'>
    readonly fileSize: FieldRef<"Document", 'Int'>
    readonly mimeType: FieldRef<"Document", 'String'>
    readonly verificationStatus: FieldRef<"Document", 'String'>
    readonly verifiedBy: FieldRef<"Document", 'String'>
    readonly verifiedAt: FieldRef<"Document", 'DateTime'>
    readonly rejectionReason: FieldRef<"Document", 'String'>
    readonly uploadedAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
    readonly studentId: FieldRef<"Document", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model FeeStructure
   */

  export type AggregateFeeStructure = {
    _count: FeeStructureCountAggregateOutputType | null
    _avg: FeeStructureAvgAggregateOutputType | null
    _sum: FeeStructureSumAggregateOutputType | null
    _min: FeeStructureMinAggregateOutputType | null
    _max: FeeStructureMaxAggregateOutputType | null
  }

  export type FeeStructureAvgAggregateOutputType = {
    tuitionFeeMonthly: number | null
    transportFeeMonthly: number | null
    examFeeYearly: number | null
    admissionFee: number | null
    booksFee: number | null
    idCardFee: number | null
    activityFee: number | null
  }

  export type FeeStructureSumAggregateOutputType = {
    tuitionFeeMonthly: number | null
    transportFeeMonthly: number | null
    examFeeYearly: number | null
    admissionFee: number | null
    booksFee: number | null
    idCardFee: number | null
    activityFee: number | null
  }

  export type FeeStructureMinAggregateOutputType = {
    id: string | null
    class: string | null
    academicYear: string | null
    tuitionFeeMonthly: number | null
    transportFeeMonthly: number | null
    examFeeYearly: number | null
    admissionFee: number | null
    booksFee: number | null
    idCardFee: number | null
    activityFee: number | null
    createdAt: Date | null
    updatedAt: Date | null
    schoolId: string | null
  }

  export type FeeStructureMaxAggregateOutputType = {
    id: string | null
    class: string | null
    academicYear: string | null
    tuitionFeeMonthly: number | null
    transportFeeMonthly: number | null
    examFeeYearly: number | null
    admissionFee: number | null
    booksFee: number | null
    idCardFee: number | null
    activityFee: number | null
    createdAt: Date | null
    updatedAt: Date | null
    schoolId: string | null
  }

  export type FeeStructureCountAggregateOutputType = {
    id: number
    class: number
    academicYear: number
    tuitionFeeMonthly: number
    transportFeeMonthly: number
    examFeeYearly: number
    admissionFee: number
    booksFee: number
    idCardFee: number
    activityFee: number
    createdAt: number
    updatedAt: number
    schoolId: number
    _all: number
  }


  export type FeeStructureAvgAggregateInputType = {
    tuitionFeeMonthly?: true
    transportFeeMonthly?: true
    examFeeYearly?: true
    admissionFee?: true
    booksFee?: true
    idCardFee?: true
    activityFee?: true
  }

  export type FeeStructureSumAggregateInputType = {
    tuitionFeeMonthly?: true
    transportFeeMonthly?: true
    examFeeYearly?: true
    admissionFee?: true
    booksFee?: true
    idCardFee?: true
    activityFee?: true
  }

  export type FeeStructureMinAggregateInputType = {
    id?: true
    class?: true
    academicYear?: true
    tuitionFeeMonthly?: true
    transportFeeMonthly?: true
    examFeeYearly?: true
    admissionFee?: true
    booksFee?: true
    idCardFee?: true
    activityFee?: true
    createdAt?: true
    updatedAt?: true
    schoolId?: true
  }

  export type FeeStructureMaxAggregateInputType = {
    id?: true
    class?: true
    academicYear?: true
    tuitionFeeMonthly?: true
    transportFeeMonthly?: true
    examFeeYearly?: true
    admissionFee?: true
    booksFee?: true
    idCardFee?: true
    activityFee?: true
    createdAt?: true
    updatedAt?: true
    schoolId?: true
  }

  export type FeeStructureCountAggregateInputType = {
    id?: true
    class?: true
    academicYear?: true
    tuitionFeeMonthly?: true
    transportFeeMonthly?: true
    examFeeYearly?: true
    admissionFee?: true
    booksFee?: true
    idCardFee?: true
    activityFee?: true
    createdAt?: true
    updatedAt?: true
    schoolId?: true
    _all?: true
  }

  export type FeeStructureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeeStructure to aggregate.
     */
    where?: FeeStructureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeStructures to fetch.
     */
    orderBy?: FeeStructureOrderByWithRelationInput | FeeStructureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeeStructureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeStructures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeStructures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeeStructures
    **/
    _count?: true | FeeStructureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeeStructureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeeStructureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeeStructureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeeStructureMaxAggregateInputType
  }

  export type GetFeeStructureAggregateType<T extends FeeStructureAggregateArgs> = {
        [P in keyof T & keyof AggregateFeeStructure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeeStructure[P]>
      : GetScalarType<T[P], AggregateFeeStructure[P]>
  }




  export type FeeStructureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeeStructureWhereInput
    orderBy?: FeeStructureOrderByWithAggregationInput | FeeStructureOrderByWithAggregationInput[]
    by: FeeStructureScalarFieldEnum[] | FeeStructureScalarFieldEnum
    having?: FeeStructureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeeStructureCountAggregateInputType | true
    _avg?: FeeStructureAvgAggregateInputType
    _sum?: FeeStructureSumAggregateInputType
    _min?: FeeStructureMinAggregateInputType
    _max?: FeeStructureMaxAggregateInputType
  }

  export type FeeStructureGroupByOutputType = {
    id: string
    class: string
    academicYear: string
    tuitionFeeMonthly: number
    transportFeeMonthly: number
    examFeeYearly: number
    admissionFee: number
    booksFee: number
    idCardFee: number
    activityFee: number
    createdAt: Date
    updatedAt: Date
    schoolId: string
    _count: FeeStructureCountAggregateOutputType | null
    _avg: FeeStructureAvgAggregateOutputType | null
    _sum: FeeStructureSumAggregateOutputType | null
    _min: FeeStructureMinAggregateOutputType | null
    _max: FeeStructureMaxAggregateOutputType | null
  }

  type GetFeeStructureGroupByPayload<T extends FeeStructureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeeStructureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeeStructureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeeStructureGroupByOutputType[P]>
            : GetScalarType<T[P], FeeStructureGroupByOutputType[P]>
        }
      >
    >


  export type FeeStructureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class?: boolean
    academicYear?: boolean
    tuitionFeeMonthly?: boolean
    transportFeeMonthly?: boolean
    examFeeYearly?: boolean
    admissionFee?: boolean
    booksFee?: boolean
    idCardFee?: boolean
    activityFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schoolId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feeStructure"]>

  export type FeeStructureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class?: boolean
    academicYear?: boolean
    tuitionFeeMonthly?: boolean
    transportFeeMonthly?: boolean
    examFeeYearly?: boolean
    admissionFee?: boolean
    booksFee?: boolean
    idCardFee?: boolean
    activityFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schoolId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feeStructure"]>

  export type FeeStructureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class?: boolean
    academicYear?: boolean
    tuitionFeeMonthly?: boolean
    transportFeeMonthly?: boolean
    examFeeYearly?: boolean
    admissionFee?: boolean
    booksFee?: boolean
    idCardFee?: boolean
    activityFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schoolId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feeStructure"]>

  export type FeeStructureSelectScalar = {
    id?: boolean
    class?: boolean
    academicYear?: boolean
    tuitionFeeMonthly?: boolean
    transportFeeMonthly?: boolean
    examFeeYearly?: boolean
    admissionFee?: boolean
    booksFee?: boolean
    idCardFee?: boolean
    activityFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schoolId?: boolean
  }

  export type FeeStructureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "class" | "academicYear" | "tuitionFeeMonthly" | "transportFeeMonthly" | "examFeeYearly" | "admissionFee" | "booksFee" | "idCardFee" | "activityFee" | "createdAt" | "updatedAt" | "schoolId", ExtArgs["result"]["feeStructure"]>
  export type FeeStructureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type FeeStructureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type FeeStructureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $FeeStructurePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeeStructure"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      class: string
      academicYear: string
      tuitionFeeMonthly: number
      transportFeeMonthly: number
      examFeeYearly: number
      admissionFee: number
      booksFee: number
      idCardFee: number
      activityFee: number
      createdAt: Date
      updatedAt: Date
      schoolId: string
    }, ExtArgs["result"]["feeStructure"]>
    composites: {}
  }

  type FeeStructureGetPayload<S extends boolean | null | undefined | FeeStructureDefaultArgs> = $Result.GetResult<Prisma.$FeeStructurePayload, S>

  type FeeStructureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeeStructureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeeStructureCountAggregateInputType | true
    }

  export interface FeeStructureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeeStructure'], meta: { name: 'FeeStructure' } }
    /**
     * Find zero or one FeeStructure that matches the filter.
     * @param {FeeStructureFindUniqueArgs} args - Arguments to find a FeeStructure
     * @example
     * // Get one FeeStructure
     * const feeStructure = await prisma.feeStructure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeeStructureFindUniqueArgs>(args: SelectSubset<T, FeeStructureFindUniqueArgs<ExtArgs>>): Prisma__FeeStructureClient<$Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeeStructure that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeeStructureFindUniqueOrThrowArgs} args - Arguments to find a FeeStructure
     * @example
     * // Get one FeeStructure
     * const feeStructure = await prisma.feeStructure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeeStructureFindUniqueOrThrowArgs>(args: SelectSubset<T, FeeStructureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeeStructureClient<$Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeeStructure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeStructureFindFirstArgs} args - Arguments to find a FeeStructure
     * @example
     * // Get one FeeStructure
     * const feeStructure = await prisma.feeStructure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeeStructureFindFirstArgs>(args?: SelectSubset<T, FeeStructureFindFirstArgs<ExtArgs>>): Prisma__FeeStructureClient<$Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeeStructure that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeStructureFindFirstOrThrowArgs} args - Arguments to find a FeeStructure
     * @example
     * // Get one FeeStructure
     * const feeStructure = await prisma.feeStructure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeeStructureFindFirstOrThrowArgs>(args?: SelectSubset<T, FeeStructureFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeeStructureClient<$Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeeStructures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeStructureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeeStructures
     * const feeStructures = await prisma.feeStructure.findMany()
     * 
     * // Get first 10 FeeStructures
     * const feeStructures = await prisma.feeStructure.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feeStructureWithIdOnly = await prisma.feeStructure.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeeStructureFindManyArgs>(args?: SelectSubset<T, FeeStructureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeeStructure.
     * @param {FeeStructureCreateArgs} args - Arguments to create a FeeStructure.
     * @example
     * // Create one FeeStructure
     * const FeeStructure = await prisma.feeStructure.create({
     *   data: {
     *     // ... data to create a FeeStructure
     *   }
     * })
     * 
     */
    create<T extends FeeStructureCreateArgs>(args: SelectSubset<T, FeeStructureCreateArgs<ExtArgs>>): Prisma__FeeStructureClient<$Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeeStructures.
     * @param {FeeStructureCreateManyArgs} args - Arguments to create many FeeStructures.
     * @example
     * // Create many FeeStructures
     * const feeStructure = await prisma.feeStructure.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeeStructureCreateManyArgs>(args?: SelectSubset<T, FeeStructureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeeStructures and returns the data saved in the database.
     * @param {FeeStructureCreateManyAndReturnArgs} args - Arguments to create many FeeStructures.
     * @example
     * // Create many FeeStructures
     * const feeStructure = await prisma.feeStructure.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeeStructures and only return the `id`
     * const feeStructureWithIdOnly = await prisma.feeStructure.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeeStructureCreateManyAndReturnArgs>(args?: SelectSubset<T, FeeStructureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeeStructure.
     * @param {FeeStructureDeleteArgs} args - Arguments to delete one FeeStructure.
     * @example
     * // Delete one FeeStructure
     * const FeeStructure = await prisma.feeStructure.delete({
     *   where: {
     *     // ... filter to delete one FeeStructure
     *   }
     * })
     * 
     */
    delete<T extends FeeStructureDeleteArgs>(args: SelectSubset<T, FeeStructureDeleteArgs<ExtArgs>>): Prisma__FeeStructureClient<$Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeeStructure.
     * @param {FeeStructureUpdateArgs} args - Arguments to update one FeeStructure.
     * @example
     * // Update one FeeStructure
     * const feeStructure = await prisma.feeStructure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeeStructureUpdateArgs>(args: SelectSubset<T, FeeStructureUpdateArgs<ExtArgs>>): Prisma__FeeStructureClient<$Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeeStructures.
     * @param {FeeStructureDeleteManyArgs} args - Arguments to filter FeeStructures to delete.
     * @example
     * // Delete a few FeeStructures
     * const { count } = await prisma.feeStructure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeeStructureDeleteManyArgs>(args?: SelectSubset<T, FeeStructureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeeStructures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeStructureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeeStructures
     * const feeStructure = await prisma.feeStructure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeeStructureUpdateManyArgs>(args: SelectSubset<T, FeeStructureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeeStructures and returns the data updated in the database.
     * @param {FeeStructureUpdateManyAndReturnArgs} args - Arguments to update many FeeStructures.
     * @example
     * // Update many FeeStructures
     * const feeStructure = await prisma.feeStructure.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeeStructures and only return the `id`
     * const feeStructureWithIdOnly = await prisma.feeStructure.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeeStructureUpdateManyAndReturnArgs>(args: SelectSubset<T, FeeStructureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeeStructure.
     * @param {FeeStructureUpsertArgs} args - Arguments to update or create a FeeStructure.
     * @example
     * // Update or create a FeeStructure
     * const feeStructure = await prisma.feeStructure.upsert({
     *   create: {
     *     // ... data to create a FeeStructure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeeStructure we want to update
     *   }
     * })
     */
    upsert<T extends FeeStructureUpsertArgs>(args: SelectSubset<T, FeeStructureUpsertArgs<ExtArgs>>): Prisma__FeeStructureClient<$Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeeStructures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeStructureCountArgs} args - Arguments to filter FeeStructures to count.
     * @example
     * // Count the number of FeeStructures
     * const count = await prisma.feeStructure.count({
     *   where: {
     *     // ... the filter for the FeeStructures we want to count
     *   }
     * })
    **/
    count<T extends FeeStructureCountArgs>(
      args?: Subset<T, FeeStructureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeeStructureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeeStructure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeStructureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeeStructureAggregateArgs>(args: Subset<T, FeeStructureAggregateArgs>): Prisma.PrismaPromise<GetFeeStructureAggregateType<T>>

    /**
     * Group by FeeStructure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeStructureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeeStructureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeeStructureGroupByArgs['orderBy'] }
        : { orderBy?: FeeStructureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeeStructureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeeStructureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeeStructure model
   */
  readonly fields: FeeStructureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeeStructure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeeStructureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeeStructure model
   */
  interface FeeStructureFieldRefs {
    readonly id: FieldRef<"FeeStructure", 'String'>
    readonly class: FieldRef<"FeeStructure", 'String'>
    readonly academicYear: FieldRef<"FeeStructure", 'String'>
    readonly tuitionFeeMonthly: FieldRef<"FeeStructure", 'Int'>
    readonly transportFeeMonthly: FieldRef<"FeeStructure", 'Int'>
    readonly examFeeYearly: FieldRef<"FeeStructure", 'Int'>
    readonly admissionFee: FieldRef<"FeeStructure", 'Int'>
    readonly booksFee: FieldRef<"FeeStructure", 'Int'>
    readonly idCardFee: FieldRef<"FeeStructure", 'Int'>
    readonly activityFee: FieldRef<"FeeStructure", 'Int'>
    readonly createdAt: FieldRef<"FeeStructure", 'DateTime'>
    readonly updatedAt: FieldRef<"FeeStructure", 'DateTime'>
    readonly schoolId: FieldRef<"FeeStructure", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FeeStructure findUnique
   */
  export type FeeStructureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeStructure
     */
    omit?: FeeStructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null
    /**
     * Filter, which FeeStructure to fetch.
     */
    where: FeeStructureWhereUniqueInput
  }

  /**
   * FeeStructure findUniqueOrThrow
   */
  export type FeeStructureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeStructure
     */
    omit?: FeeStructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null
    /**
     * Filter, which FeeStructure to fetch.
     */
    where: FeeStructureWhereUniqueInput
  }

  /**
   * FeeStructure findFirst
   */
  export type FeeStructureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeStructure
     */
    omit?: FeeStructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null
    /**
     * Filter, which FeeStructure to fetch.
     */
    where?: FeeStructureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeStructures to fetch.
     */
    orderBy?: FeeStructureOrderByWithRelationInput | FeeStructureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeeStructures.
     */
    cursor?: FeeStructureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeStructures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeStructures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeeStructures.
     */
    distinct?: FeeStructureScalarFieldEnum | FeeStructureScalarFieldEnum[]
  }

  /**
   * FeeStructure findFirstOrThrow
   */
  export type FeeStructureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeStructure
     */
    omit?: FeeStructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null
    /**
     * Filter, which FeeStructure to fetch.
     */
    where?: FeeStructureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeStructures to fetch.
     */
    orderBy?: FeeStructureOrderByWithRelationInput | FeeStructureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeeStructures.
     */
    cursor?: FeeStructureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeStructures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeStructures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeeStructures.
     */
    distinct?: FeeStructureScalarFieldEnum | FeeStructureScalarFieldEnum[]
  }

  /**
   * FeeStructure findMany
   */
  export type FeeStructureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeStructure
     */
    omit?: FeeStructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null
    /**
     * Filter, which FeeStructures to fetch.
     */
    where?: FeeStructureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeStructures to fetch.
     */
    orderBy?: FeeStructureOrderByWithRelationInput | FeeStructureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeeStructures.
     */
    cursor?: FeeStructureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeStructures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeStructures.
     */
    skip?: number
    distinct?: FeeStructureScalarFieldEnum | FeeStructureScalarFieldEnum[]
  }

  /**
   * FeeStructure create
   */
  export type FeeStructureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeStructure
     */
    omit?: FeeStructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null
    /**
     * The data needed to create a FeeStructure.
     */
    data: XOR<FeeStructureCreateInput, FeeStructureUncheckedCreateInput>
  }

  /**
   * FeeStructure createMany
   */
  export type FeeStructureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeeStructures.
     */
    data: FeeStructureCreateManyInput | FeeStructureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeeStructure createManyAndReturn
   */
  export type FeeStructureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeeStructure
     */
    omit?: FeeStructureOmit<ExtArgs> | null
    /**
     * The data used to create many FeeStructures.
     */
    data: FeeStructureCreateManyInput | FeeStructureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeeStructure update
   */
  export type FeeStructureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeStructure
     */
    omit?: FeeStructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null
    /**
     * The data needed to update a FeeStructure.
     */
    data: XOR<FeeStructureUpdateInput, FeeStructureUncheckedUpdateInput>
    /**
     * Choose, which FeeStructure to update.
     */
    where: FeeStructureWhereUniqueInput
  }

  /**
   * FeeStructure updateMany
   */
  export type FeeStructureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeeStructures.
     */
    data: XOR<FeeStructureUpdateManyMutationInput, FeeStructureUncheckedUpdateManyInput>
    /**
     * Filter which FeeStructures to update
     */
    where?: FeeStructureWhereInput
    /**
     * Limit how many FeeStructures to update.
     */
    limit?: number
  }

  /**
   * FeeStructure updateManyAndReturn
   */
  export type FeeStructureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeeStructure
     */
    omit?: FeeStructureOmit<ExtArgs> | null
    /**
     * The data used to update FeeStructures.
     */
    data: XOR<FeeStructureUpdateManyMutationInput, FeeStructureUncheckedUpdateManyInput>
    /**
     * Filter which FeeStructures to update
     */
    where?: FeeStructureWhereInput
    /**
     * Limit how many FeeStructures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeeStructure upsert
   */
  export type FeeStructureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeStructure
     */
    omit?: FeeStructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null
    /**
     * The filter to search for the FeeStructure to update in case it exists.
     */
    where: FeeStructureWhereUniqueInput
    /**
     * In case the FeeStructure found by the `where` argument doesn't exist, create a new FeeStructure with this data.
     */
    create: XOR<FeeStructureCreateInput, FeeStructureUncheckedCreateInput>
    /**
     * In case the FeeStructure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeeStructureUpdateInput, FeeStructureUncheckedUpdateInput>
  }

  /**
   * FeeStructure delete
   */
  export type FeeStructureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeStructure
     */
    omit?: FeeStructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null
    /**
     * Filter which FeeStructure to delete.
     */
    where: FeeStructureWhereUniqueInput
  }

  /**
   * FeeStructure deleteMany
   */
  export type FeeStructureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeeStructures to delete
     */
    where?: FeeStructureWhereInput
    /**
     * Limit how many FeeStructures to delete.
     */
    limit?: number
  }

  /**
   * FeeStructure without action
   */
  export type FeeStructureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeStructure
     */
    omit?: FeeStructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null
  }


  /**
   * Model StudentFee
   */

  export type AggregateStudentFee = {
    _count: StudentFeeCountAggregateOutputType | null
    _avg: StudentFeeAvgAggregateOutputType | null
    _sum: StudentFeeSumAggregateOutputType | null
    _min: StudentFeeMinAggregateOutputType | null
    _max: StudentFeeMaxAggregateOutputType | null
  }

  export type StudentFeeAvgAggregateOutputType = {
    tuitionFee: number | null
    transportFee: number | null
    examFee: number | null
    admissionFee: number | null
    otherFees: number | null
    discountPercentage: number | null
    discountAmount: number | null
    specialCharges: number | null
    totalFee: number | null
    totalPayable: number | null
    totalPaid: number | null
    totalPending: number | null
  }

  export type StudentFeeSumAggregateOutputType = {
    tuitionFee: number | null
    transportFee: number | null
    examFee: number | null
    admissionFee: number | null
    otherFees: number | null
    discountPercentage: number | null
    discountAmount: number | null
    specialCharges: number | null
    totalFee: number | null
    totalPayable: number | null
    totalPaid: number | null
    totalPending: number | null
  }

  export type StudentFeeMinAggregateOutputType = {
    id: string | null
    academicYear: string | null
    tuitionFee: number | null
    transportFee: number | null
    examFee: number | null
    admissionFee: number | null
    otherFees: number | null
    discountPercentage: number | null
    discountAmount: number | null
    specialCharges: number | null
    totalFee: number | null
    totalPayable: number | null
    totalPaid: number | null
    totalPending: number | null
    createdAt: Date | null
    updatedAt: Date | null
    studentId: string | null
  }

  export type StudentFeeMaxAggregateOutputType = {
    id: string | null
    academicYear: string | null
    tuitionFee: number | null
    transportFee: number | null
    examFee: number | null
    admissionFee: number | null
    otherFees: number | null
    discountPercentage: number | null
    discountAmount: number | null
    specialCharges: number | null
    totalFee: number | null
    totalPayable: number | null
    totalPaid: number | null
    totalPending: number | null
    createdAt: Date | null
    updatedAt: Date | null
    studentId: string | null
  }

  export type StudentFeeCountAggregateOutputType = {
    id: number
    academicYear: number
    tuitionFee: number
    transportFee: number
    examFee: number
    admissionFee: number
    otherFees: number
    discountPercentage: number
    discountAmount: number
    specialCharges: number
    totalFee: number
    totalPayable: number
    totalPaid: number
    totalPending: number
    createdAt: number
    updatedAt: number
    studentId: number
    _all: number
  }


  export type StudentFeeAvgAggregateInputType = {
    tuitionFee?: true
    transportFee?: true
    examFee?: true
    admissionFee?: true
    otherFees?: true
    discountPercentage?: true
    discountAmount?: true
    specialCharges?: true
    totalFee?: true
    totalPayable?: true
    totalPaid?: true
    totalPending?: true
  }

  export type StudentFeeSumAggregateInputType = {
    tuitionFee?: true
    transportFee?: true
    examFee?: true
    admissionFee?: true
    otherFees?: true
    discountPercentage?: true
    discountAmount?: true
    specialCharges?: true
    totalFee?: true
    totalPayable?: true
    totalPaid?: true
    totalPending?: true
  }

  export type StudentFeeMinAggregateInputType = {
    id?: true
    academicYear?: true
    tuitionFee?: true
    transportFee?: true
    examFee?: true
    admissionFee?: true
    otherFees?: true
    discountPercentage?: true
    discountAmount?: true
    specialCharges?: true
    totalFee?: true
    totalPayable?: true
    totalPaid?: true
    totalPending?: true
    createdAt?: true
    updatedAt?: true
    studentId?: true
  }

  export type StudentFeeMaxAggregateInputType = {
    id?: true
    academicYear?: true
    tuitionFee?: true
    transportFee?: true
    examFee?: true
    admissionFee?: true
    otherFees?: true
    discountPercentage?: true
    discountAmount?: true
    specialCharges?: true
    totalFee?: true
    totalPayable?: true
    totalPaid?: true
    totalPending?: true
    createdAt?: true
    updatedAt?: true
    studentId?: true
  }

  export type StudentFeeCountAggregateInputType = {
    id?: true
    academicYear?: true
    tuitionFee?: true
    transportFee?: true
    examFee?: true
    admissionFee?: true
    otherFees?: true
    discountPercentage?: true
    discountAmount?: true
    specialCharges?: true
    totalFee?: true
    totalPayable?: true
    totalPaid?: true
    totalPending?: true
    createdAt?: true
    updatedAt?: true
    studentId?: true
    _all?: true
  }

  export type StudentFeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentFee to aggregate.
     */
    where?: StudentFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentFees to fetch.
     */
    orderBy?: StudentFeeOrderByWithRelationInput | StudentFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentFees
    **/
    _count?: true | StudentFeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentFeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentFeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentFeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentFeeMaxAggregateInputType
  }

  export type GetStudentFeeAggregateType<T extends StudentFeeAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentFee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentFee[P]>
      : GetScalarType<T[P], AggregateStudentFee[P]>
  }




  export type StudentFeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentFeeWhereInput
    orderBy?: StudentFeeOrderByWithAggregationInput | StudentFeeOrderByWithAggregationInput[]
    by: StudentFeeScalarFieldEnum[] | StudentFeeScalarFieldEnum
    having?: StudentFeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentFeeCountAggregateInputType | true
    _avg?: StudentFeeAvgAggregateInputType
    _sum?: StudentFeeSumAggregateInputType
    _min?: StudentFeeMinAggregateInputType
    _max?: StudentFeeMaxAggregateInputType
  }

  export type StudentFeeGroupByOutputType = {
    id: string
    academicYear: string
    tuitionFee: number
    transportFee: number
    examFee: number
    admissionFee: number
    otherFees: number
    discountPercentage: number
    discountAmount: number
    specialCharges: number
    totalFee: number
    totalPayable: number
    totalPaid: number
    totalPending: number
    createdAt: Date
    updatedAt: Date
    studentId: string
    _count: StudentFeeCountAggregateOutputType | null
    _avg: StudentFeeAvgAggregateOutputType | null
    _sum: StudentFeeSumAggregateOutputType | null
    _min: StudentFeeMinAggregateOutputType | null
    _max: StudentFeeMaxAggregateOutputType | null
  }

  type GetStudentFeeGroupByPayload<T extends StudentFeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentFeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentFeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentFeeGroupByOutputType[P]>
            : GetScalarType<T[P], StudentFeeGroupByOutputType[P]>
        }
      >
    >


  export type StudentFeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    academicYear?: boolean
    tuitionFee?: boolean
    transportFee?: boolean
    examFee?: boolean
    admissionFee?: boolean
    otherFees?: boolean
    discountPercentage?: boolean
    discountAmount?: boolean
    specialCharges?: boolean
    totalFee?: boolean
    totalPayable?: boolean
    totalPaid?: boolean
    totalPending?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    installments?: boolean | StudentFee$installmentsArgs<ExtArgs>
    _count?: boolean | StudentFeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentFee"]>

  export type StudentFeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    academicYear?: boolean
    tuitionFee?: boolean
    transportFee?: boolean
    examFee?: boolean
    admissionFee?: boolean
    otherFees?: boolean
    discountPercentage?: boolean
    discountAmount?: boolean
    specialCharges?: boolean
    totalFee?: boolean
    totalPayable?: boolean
    totalPaid?: boolean
    totalPending?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentFee"]>

  export type StudentFeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    academicYear?: boolean
    tuitionFee?: boolean
    transportFee?: boolean
    examFee?: boolean
    admissionFee?: boolean
    otherFees?: boolean
    discountPercentage?: boolean
    discountAmount?: boolean
    specialCharges?: boolean
    totalFee?: boolean
    totalPayable?: boolean
    totalPaid?: boolean
    totalPending?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentFee"]>

  export type StudentFeeSelectScalar = {
    id?: boolean
    academicYear?: boolean
    tuitionFee?: boolean
    transportFee?: boolean
    examFee?: boolean
    admissionFee?: boolean
    otherFees?: boolean
    discountPercentage?: boolean
    discountAmount?: boolean
    specialCharges?: boolean
    totalFee?: boolean
    totalPayable?: boolean
    totalPaid?: boolean
    totalPending?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentId?: boolean
  }

  export type StudentFeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "academicYear" | "tuitionFee" | "transportFee" | "examFee" | "admissionFee" | "otherFees" | "discountPercentage" | "discountAmount" | "specialCharges" | "totalFee" | "totalPayable" | "totalPaid" | "totalPending" | "createdAt" | "updatedAt" | "studentId", ExtArgs["result"]["studentFee"]>
  export type StudentFeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    installments?: boolean | StudentFee$installmentsArgs<ExtArgs>
    _count?: boolean | StudentFeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentFeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type StudentFeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $StudentFeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentFee"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      installments: Prisma.$FeeInstallmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      academicYear: string
      tuitionFee: number
      transportFee: number
      examFee: number
      admissionFee: number
      otherFees: number
      discountPercentage: number
      discountAmount: number
      specialCharges: number
      totalFee: number
      totalPayable: number
      totalPaid: number
      totalPending: number
      createdAt: Date
      updatedAt: Date
      studentId: string
    }, ExtArgs["result"]["studentFee"]>
    composites: {}
  }

  type StudentFeeGetPayload<S extends boolean | null | undefined | StudentFeeDefaultArgs> = $Result.GetResult<Prisma.$StudentFeePayload, S>

  type StudentFeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentFeeCountAggregateInputType | true
    }

  export interface StudentFeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentFee'], meta: { name: 'StudentFee' } }
    /**
     * Find zero or one StudentFee that matches the filter.
     * @param {StudentFeeFindUniqueArgs} args - Arguments to find a StudentFee
     * @example
     * // Get one StudentFee
     * const studentFee = await prisma.studentFee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFeeFindUniqueArgs>(args: SelectSubset<T, StudentFeeFindUniqueArgs<ExtArgs>>): Prisma__StudentFeeClient<$Result.GetResult<Prisma.$StudentFeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentFee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFeeFindUniqueOrThrowArgs} args - Arguments to find a StudentFee
     * @example
     * // Get one StudentFee
     * const studentFee = await prisma.studentFee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFeeFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentFeeClient<$Result.GetResult<Prisma.$StudentFeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentFee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFeeFindFirstArgs} args - Arguments to find a StudentFee
     * @example
     * // Get one StudentFee
     * const studentFee = await prisma.studentFee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFeeFindFirstArgs>(args?: SelectSubset<T, StudentFeeFindFirstArgs<ExtArgs>>): Prisma__StudentFeeClient<$Result.GetResult<Prisma.$StudentFeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentFee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFeeFindFirstOrThrowArgs} args - Arguments to find a StudentFee
     * @example
     * // Get one StudentFee
     * const studentFee = await prisma.studentFee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFeeFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentFeeClient<$Result.GetResult<Prisma.$StudentFeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentFees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentFees
     * const studentFees = await prisma.studentFee.findMany()
     * 
     * // Get first 10 StudentFees
     * const studentFees = await prisma.studentFee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentFeeWithIdOnly = await prisma.studentFee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFeeFindManyArgs>(args?: SelectSubset<T, StudentFeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentFeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentFee.
     * @param {StudentFeeCreateArgs} args - Arguments to create a StudentFee.
     * @example
     * // Create one StudentFee
     * const StudentFee = await prisma.studentFee.create({
     *   data: {
     *     // ... data to create a StudentFee
     *   }
     * })
     * 
     */
    create<T extends StudentFeeCreateArgs>(args: SelectSubset<T, StudentFeeCreateArgs<ExtArgs>>): Prisma__StudentFeeClient<$Result.GetResult<Prisma.$StudentFeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentFees.
     * @param {StudentFeeCreateManyArgs} args - Arguments to create many StudentFees.
     * @example
     * // Create many StudentFees
     * const studentFee = await prisma.studentFee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentFeeCreateManyArgs>(args?: SelectSubset<T, StudentFeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentFees and returns the data saved in the database.
     * @param {StudentFeeCreateManyAndReturnArgs} args - Arguments to create many StudentFees.
     * @example
     * // Create many StudentFees
     * const studentFee = await prisma.studentFee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentFees and only return the `id`
     * const studentFeeWithIdOnly = await prisma.studentFee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentFeeCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentFeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentFeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentFee.
     * @param {StudentFeeDeleteArgs} args - Arguments to delete one StudentFee.
     * @example
     * // Delete one StudentFee
     * const StudentFee = await prisma.studentFee.delete({
     *   where: {
     *     // ... filter to delete one StudentFee
     *   }
     * })
     * 
     */
    delete<T extends StudentFeeDeleteArgs>(args: SelectSubset<T, StudentFeeDeleteArgs<ExtArgs>>): Prisma__StudentFeeClient<$Result.GetResult<Prisma.$StudentFeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentFee.
     * @param {StudentFeeUpdateArgs} args - Arguments to update one StudentFee.
     * @example
     * // Update one StudentFee
     * const studentFee = await prisma.studentFee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentFeeUpdateArgs>(args: SelectSubset<T, StudentFeeUpdateArgs<ExtArgs>>): Prisma__StudentFeeClient<$Result.GetResult<Prisma.$StudentFeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentFees.
     * @param {StudentFeeDeleteManyArgs} args - Arguments to filter StudentFees to delete.
     * @example
     * // Delete a few StudentFees
     * const { count } = await prisma.studentFee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentFeeDeleteManyArgs>(args?: SelectSubset<T, StudentFeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentFees
     * const studentFee = await prisma.studentFee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentFeeUpdateManyArgs>(args: SelectSubset<T, StudentFeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentFees and returns the data updated in the database.
     * @param {StudentFeeUpdateManyAndReturnArgs} args - Arguments to update many StudentFees.
     * @example
     * // Update many StudentFees
     * const studentFee = await prisma.studentFee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentFees and only return the `id`
     * const studentFeeWithIdOnly = await prisma.studentFee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentFeeUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentFeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentFeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentFee.
     * @param {StudentFeeUpsertArgs} args - Arguments to update or create a StudentFee.
     * @example
     * // Update or create a StudentFee
     * const studentFee = await prisma.studentFee.upsert({
     *   create: {
     *     // ... data to create a StudentFee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentFee we want to update
     *   }
     * })
     */
    upsert<T extends StudentFeeUpsertArgs>(args: SelectSubset<T, StudentFeeUpsertArgs<ExtArgs>>): Prisma__StudentFeeClient<$Result.GetResult<Prisma.$StudentFeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFeeCountArgs} args - Arguments to filter StudentFees to count.
     * @example
     * // Count the number of StudentFees
     * const count = await prisma.studentFee.count({
     *   where: {
     *     // ... the filter for the StudentFees we want to count
     *   }
     * })
    **/
    count<T extends StudentFeeCountArgs>(
      args?: Subset<T, StudentFeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentFeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentFee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentFeeAggregateArgs>(args: Subset<T, StudentFeeAggregateArgs>): Prisma.PrismaPromise<GetStudentFeeAggregateType<T>>

    /**
     * Group by StudentFee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentFeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentFeeGroupByArgs['orderBy'] }
        : { orderBy?: StudentFeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentFeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentFeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentFee model
   */
  readonly fields: StudentFeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentFee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentFeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    installments<T extends StudentFee$installmentsArgs<ExtArgs> = {}>(args?: Subset<T, StudentFee$installmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeInstallmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentFee model
   */
  interface StudentFeeFieldRefs {
    readonly id: FieldRef<"StudentFee", 'String'>
    readonly academicYear: FieldRef<"StudentFee", 'String'>
    readonly tuitionFee: FieldRef<"StudentFee", 'Int'>
    readonly transportFee: FieldRef<"StudentFee", 'Int'>
    readonly examFee: FieldRef<"StudentFee", 'Int'>
    readonly admissionFee: FieldRef<"StudentFee", 'Int'>
    readonly otherFees: FieldRef<"StudentFee", 'Int'>
    readonly discountPercentage: FieldRef<"StudentFee", 'Int'>
    readonly discountAmount: FieldRef<"StudentFee", 'Int'>
    readonly specialCharges: FieldRef<"StudentFee", 'Int'>
    readonly totalFee: FieldRef<"StudentFee", 'Int'>
    readonly totalPayable: FieldRef<"StudentFee", 'Int'>
    readonly totalPaid: FieldRef<"StudentFee", 'Int'>
    readonly totalPending: FieldRef<"StudentFee", 'Int'>
    readonly createdAt: FieldRef<"StudentFee", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentFee", 'DateTime'>
    readonly studentId: FieldRef<"StudentFee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StudentFee findUnique
   */
  export type StudentFeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentFee
     */
    select?: StudentFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentFee
     */
    omit?: StudentFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentFeeInclude<ExtArgs> | null
    /**
     * Filter, which StudentFee to fetch.
     */
    where: StudentFeeWhereUniqueInput
  }

  /**
   * StudentFee findUniqueOrThrow
   */
  export type StudentFeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentFee
     */
    select?: StudentFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentFee
     */
    omit?: StudentFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentFeeInclude<ExtArgs> | null
    /**
     * Filter, which StudentFee to fetch.
     */
    where: StudentFeeWhereUniqueInput
  }

  /**
   * StudentFee findFirst
   */
  export type StudentFeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentFee
     */
    select?: StudentFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentFee
     */
    omit?: StudentFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentFeeInclude<ExtArgs> | null
    /**
     * Filter, which StudentFee to fetch.
     */
    where?: StudentFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentFees to fetch.
     */
    orderBy?: StudentFeeOrderByWithRelationInput | StudentFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentFees.
     */
    cursor?: StudentFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentFees.
     */
    distinct?: StudentFeeScalarFieldEnum | StudentFeeScalarFieldEnum[]
  }

  /**
   * StudentFee findFirstOrThrow
   */
  export type StudentFeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentFee
     */
    select?: StudentFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentFee
     */
    omit?: StudentFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentFeeInclude<ExtArgs> | null
    /**
     * Filter, which StudentFee to fetch.
     */
    where?: StudentFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentFees to fetch.
     */
    orderBy?: StudentFeeOrderByWithRelationInput | StudentFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentFees.
     */
    cursor?: StudentFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentFees.
     */
    distinct?: StudentFeeScalarFieldEnum | StudentFeeScalarFieldEnum[]
  }

  /**
   * StudentFee findMany
   */
  export type StudentFeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentFee
     */
    select?: StudentFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentFee
     */
    omit?: StudentFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentFeeInclude<ExtArgs> | null
    /**
     * Filter, which StudentFees to fetch.
     */
    where?: StudentFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentFees to fetch.
     */
    orderBy?: StudentFeeOrderByWithRelationInput | StudentFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentFees.
     */
    cursor?: StudentFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentFees.
     */
    skip?: number
    distinct?: StudentFeeScalarFieldEnum | StudentFeeScalarFieldEnum[]
  }

  /**
   * StudentFee create
   */
  export type StudentFeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentFee
     */
    select?: StudentFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentFee
     */
    omit?: StudentFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentFeeInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentFee.
     */
    data: XOR<StudentFeeCreateInput, StudentFeeUncheckedCreateInput>
  }

  /**
   * StudentFee createMany
   */
  export type StudentFeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentFees.
     */
    data: StudentFeeCreateManyInput | StudentFeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentFee createManyAndReturn
   */
  export type StudentFeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentFee
     */
    select?: StudentFeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentFee
     */
    omit?: StudentFeeOmit<ExtArgs> | null
    /**
     * The data used to create many StudentFees.
     */
    data: StudentFeeCreateManyInput | StudentFeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentFeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentFee update
   */
  export type StudentFeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentFee
     */
    select?: StudentFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentFee
     */
    omit?: StudentFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentFeeInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentFee.
     */
    data: XOR<StudentFeeUpdateInput, StudentFeeUncheckedUpdateInput>
    /**
     * Choose, which StudentFee to update.
     */
    where: StudentFeeWhereUniqueInput
  }

  /**
   * StudentFee updateMany
   */
  export type StudentFeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentFees.
     */
    data: XOR<StudentFeeUpdateManyMutationInput, StudentFeeUncheckedUpdateManyInput>
    /**
     * Filter which StudentFees to update
     */
    where?: StudentFeeWhereInput
    /**
     * Limit how many StudentFees to update.
     */
    limit?: number
  }

  /**
   * StudentFee updateManyAndReturn
   */
  export type StudentFeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentFee
     */
    select?: StudentFeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentFee
     */
    omit?: StudentFeeOmit<ExtArgs> | null
    /**
     * The data used to update StudentFees.
     */
    data: XOR<StudentFeeUpdateManyMutationInput, StudentFeeUncheckedUpdateManyInput>
    /**
     * Filter which StudentFees to update
     */
    where?: StudentFeeWhereInput
    /**
     * Limit how many StudentFees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentFeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentFee upsert
   */
  export type StudentFeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentFee
     */
    select?: StudentFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentFee
     */
    omit?: StudentFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentFeeInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentFee to update in case it exists.
     */
    where: StudentFeeWhereUniqueInput
    /**
     * In case the StudentFee found by the `where` argument doesn't exist, create a new StudentFee with this data.
     */
    create: XOR<StudentFeeCreateInput, StudentFeeUncheckedCreateInput>
    /**
     * In case the StudentFee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentFeeUpdateInput, StudentFeeUncheckedUpdateInput>
  }

  /**
   * StudentFee delete
   */
  export type StudentFeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentFee
     */
    select?: StudentFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentFee
     */
    omit?: StudentFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentFeeInclude<ExtArgs> | null
    /**
     * Filter which StudentFee to delete.
     */
    where: StudentFeeWhereUniqueInput
  }

  /**
   * StudentFee deleteMany
   */
  export type StudentFeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentFees to delete
     */
    where?: StudentFeeWhereInput
    /**
     * Limit how many StudentFees to delete.
     */
    limit?: number
  }

  /**
   * StudentFee.installments
   */
  export type StudentFee$installmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInstallment
     */
    select?: FeeInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInstallment
     */
    omit?: FeeInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInstallmentInclude<ExtArgs> | null
    where?: FeeInstallmentWhereInput
    orderBy?: FeeInstallmentOrderByWithRelationInput | FeeInstallmentOrderByWithRelationInput[]
    cursor?: FeeInstallmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeeInstallmentScalarFieldEnum | FeeInstallmentScalarFieldEnum[]
  }

  /**
   * StudentFee without action
   */
  export type StudentFeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentFee
     */
    select?: StudentFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentFee
     */
    omit?: StudentFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentFeeInclude<ExtArgs> | null
  }


  /**
   * Model FeeInstallment
   */

  export type AggregateFeeInstallment = {
    _count: FeeInstallmentCountAggregateOutputType | null
    _avg: FeeInstallmentAvgAggregateOutputType | null
    _sum: FeeInstallmentSumAggregateOutputType | null
    _min: FeeInstallmentMinAggregateOutputType | null
    _max: FeeInstallmentMaxAggregateOutputType | null
  }

  export type FeeInstallmentAvgAggregateOutputType = {
    installmentNumber: number | null
    amountDue: number | null
    amountPaid: number | null
    lateFee: number | null
  }

  export type FeeInstallmentSumAggregateOutputType = {
    installmentNumber: number | null
    amountDue: number | null
    amountPaid: number | null
    lateFee: number | null
  }

  export type FeeInstallmentMinAggregateOutputType = {
    id: string | null
    installmentNumber: number | null
    month: string | null
    dueDate: Date | null
    amountDue: number | null
    amountPaid: number | null
    lateFee: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    studentFeeId: string | null
  }

  export type FeeInstallmentMaxAggregateOutputType = {
    id: string | null
    installmentNumber: number | null
    month: string | null
    dueDate: Date | null
    amountDue: number | null
    amountPaid: number | null
    lateFee: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    studentFeeId: string | null
  }

  export type FeeInstallmentCountAggregateOutputType = {
    id: number
    installmentNumber: number
    month: number
    dueDate: number
    amountDue: number
    amountPaid: number
    lateFee: number
    status: number
    createdAt: number
    updatedAt: number
    studentFeeId: number
    _all: number
  }


  export type FeeInstallmentAvgAggregateInputType = {
    installmentNumber?: true
    amountDue?: true
    amountPaid?: true
    lateFee?: true
  }

  export type FeeInstallmentSumAggregateInputType = {
    installmentNumber?: true
    amountDue?: true
    amountPaid?: true
    lateFee?: true
  }

  export type FeeInstallmentMinAggregateInputType = {
    id?: true
    installmentNumber?: true
    month?: true
    dueDate?: true
    amountDue?: true
    amountPaid?: true
    lateFee?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    studentFeeId?: true
  }

  export type FeeInstallmentMaxAggregateInputType = {
    id?: true
    installmentNumber?: true
    month?: true
    dueDate?: true
    amountDue?: true
    amountPaid?: true
    lateFee?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    studentFeeId?: true
  }

  export type FeeInstallmentCountAggregateInputType = {
    id?: true
    installmentNumber?: true
    month?: true
    dueDate?: true
    amountDue?: true
    amountPaid?: true
    lateFee?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    studentFeeId?: true
    _all?: true
  }

  export type FeeInstallmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeeInstallment to aggregate.
     */
    where?: FeeInstallmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeInstallments to fetch.
     */
    orderBy?: FeeInstallmentOrderByWithRelationInput | FeeInstallmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeeInstallmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeInstallments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeInstallments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeeInstallments
    **/
    _count?: true | FeeInstallmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeeInstallmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeeInstallmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeeInstallmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeeInstallmentMaxAggregateInputType
  }

  export type GetFeeInstallmentAggregateType<T extends FeeInstallmentAggregateArgs> = {
        [P in keyof T & keyof AggregateFeeInstallment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeeInstallment[P]>
      : GetScalarType<T[P], AggregateFeeInstallment[P]>
  }




  export type FeeInstallmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeeInstallmentWhereInput
    orderBy?: FeeInstallmentOrderByWithAggregationInput | FeeInstallmentOrderByWithAggregationInput[]
    by: FeeInstallmentScalarFieldEnum[] | FeeInstallmentScalarFieldEnum
    having?: FeeInstallmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeeInstallmentCountAggregateInputType | true
    _avg?: FeeInstallmentAvgAggregateInputType
    _sum?: FeeInstallmentSumAggregateInputType
    _min?: FeeInstallmentMinAggregateInputType
    _max?: FeeInstallmentMaxAggregateInputType
  }

  export type FeeInstallmentGroupByOutputType = {
    id: string
    installmentNumber: number
    month: string
    dueDate: Date
    amountDue: number
    amountPaid: number
    lateFee: number
    status: string
    createdAt: Date
    updatedAt: Date
    studentFeeId: string
    _count: FeeInstallmentCountAggregateOutputType | null
    _avg: FeeInstallmentAvgAggregateOutputType | null
    _sum: FeeInstallmentSumAggregateOutputType | null
    _min: FeeInstallmentMinAggregateOutputType | null
    _max: FeeInstallmentMaxAggregateOutputType | null
  }

  type GetFeeInstallmentGroupByPayload<T extends FeeInstallmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeeInstallmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeeInstallmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeeInstallmentGroupByOutputType[P]>
            : GetScalarType<T[P], FeeInstallmentGroupByOutputType[P]>
        }
      >
    >


  export type FeeInstallmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    installmentNumber?: boolean
    month?: boolean
    dueDate?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    lateFee?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentFeeId?: boolean
    studentFee?: boolean | StudentFeeDefaultArgs<ExtArgs>
    payments?: boolean | FeeInstallment$paymentsArgs<ExtArgs>
    _count?: boolean | FeeInstallmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feeInstallment"]>

  export type FeeInstallmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    installmentNumber?: boolean
    month?: boolean
    dueDate?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    lateFee?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentFeeId?: boolean
    studentFee?: boolean | StudentFeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feeInstallment"]>

  export type FeeInstallmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    installmentNumber?: boolean
    month?: boolean
    dueDate?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    lateFee?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentFeeId?: boolean
    studentFee?: boolean | StudentFeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feeInstallment"]>

  export type FeeInstallmentSelectScalar = {
    id?: boolean
    installmentNumber?: boolean
    month?: boolean
    dueDate?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    lateFee?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentFeeId?: boolean
  }

  export type FeeInstallmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "installmentNumber" | "month" | "dueDate" | "amountDue" | "amountPaid" | "lateFee" | "status" | "createdAt" | "updatedAt" | "studentFeeId", ExtArgs["result"]["feeInstallment"]>
  export type FeeInstallmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentFee?: boolean | StudentFeeDefaultArgs<ExtArgs>
    payments?: boolean | FeeInstallment$paymentsArgs<ExtArgs>
    _count?: boolean | FeeInstallmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FeeInstallmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentFee?: boolean | StudentFeeDefaultArgs<ExtArgs>
  }
  export type FeeInstallmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentFee?: boolean | StudentFeeDefaultArgs<ExtArgs>
  }

  export type $FeeInstallmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeeInstallment"
    objects: {
      studentFee: Prisma.$StudentFeePayload<ExtArgs>
      payments: Prisma.$FeePaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      installmentNumber: number
      month: string
      dueDate: Date
      amountDue: number
      amountPaid: number
      lateFee: number
      status: string
      createdAt: Date
      updatedAt: Date
      studentFeeId: string
    }, ExtArgs["result"]["feeInstallment"]>
    composites: {}
  }

  type FeeInstallmentGetPayload<S extends boolean | null | undefined | FeeInstallmentDefaultArgs> = $Result.GetResult<Prisma.$FeeInstallmentPayload, S>

  type FeeInstallmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeeInstallmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeeInstallmentCountAggregateInputType | true
    }

  export interface FeeInstallmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeeInstallment'], meta: { name: 'FeeInstallment' } }
    /**
     * Find zero or one FeeInstallment that matches the filter.
     * @param {FeeInstallmentFindUniqueArgs} args - Arguments to find a FeeInstallment
     * @example
     * // Get one FeeInstallment
     * const feeInstallment = await prisma.feeInstallment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeeInstallmentFindUniqueArgs>(args: SelectSubset<T, FeeInstallmentFindUniqueArgs<ExtArgs>>): Prisma__FeeInstallmentClient<$Result.GetResult<Prisma.$FeeInstallmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeeInstallment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeeInstallmentFindUniqueOrThrowArgs} args - Arguments to find a FeeInstallment
     * @example
     * // Get one FeeInstallment
     * const feeInstallment = await prisma.feeInstallment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeeInstallmentFindUniqueOrThrowArgs>(args: SelectSubset<T, FeeInstallmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeeInstallmentClient<$Result.GetResult<Prisma.$FeeInstallmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeeInstallment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeInstallmentFindFirstArgs} args - Arguments to find a FeeInstallment
     * @example
     * // Get one FeeInstallment
     * const feeInstallment = await prisma.feeInstallment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeeInstallmentFindFirstArgs>(args?: SelectSubset<T, FeeInstallmentFindFirstArgs<ExtArgs>>): Prisma__FeeInstallmentClient<$Result.GetResult<Prisma.$FeeInstallmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeeInstallment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeInstallmentFindFirstOrThrowArgs} args - Arguments to find a FeeInstallment
     * @example
     * // Get one FeeInstallment
     * const feeInstallment = await prisma.feeInstallment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeeInstallmentFindFirstOrThrowArgs>(args?: SelectSubset<T, FeeInstallmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeeInstallmentClient<$Result.GetResult<Prisma.$FeeInstallmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeeInstallments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeInstallmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeeInstallments
     * const feeInstallments = await prisma.feeInstallment.findMany()
     * 
     * // Get first 10 FeeInstallments
     * const feeInstallments = await prisma.feeInstallment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feeInstallmentWithIdOnly = await prisma.feeInstallment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeeInstallmentFindManyArgs>(args?: SelectSubset<T, FeeInstallmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeInstallmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeeInstallment.
     * @param {FeeInstallmentCreateArgs} args - Arguments to create a FeeInstallment.
     * @example
     * // Create one FeeInstallment
     * const FeeInstallment = await prisma.feeInstallment.create({
     *   data: {
     *     // ... data to create a FeeInstallment
     *   }
     * })
     * 
     */
    create<T extends FeeInstallmentCreateArgs>(args: SelectSubset<T, FeeInstallmentCreateArgs<ExtArgs>>): Prisma__FeeInstallmentClient<$Result.GetResult<Prisma.$FeeInstallmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeeInstallments.
     * @param {FeeInstallmentCreateManyArgs} args - Arguments to create many FeeInstallments.
     * @example
     * // Create many FeeInstallments
     * const feeInstallment = await prisma.feeInstallment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeeInstallmentCreateManyArgs>(args?: SelectSubset<T, FeeInstallmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeeInstallments and returns the data saved in the database.
     * @param {FeeInstallmentCreateManyAndReturnArgs} args - Arguments to create many FeeInstallments.
     * @example
     * // Create many FeeInstallments
     * const feeInstallment = await prisma.feeInstallment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeeInstallments and only return the `id`
     * const feeInstallmentWithIdOnly = await prisma.feeInstallment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeeInstallmentCreateManyAndReturnArgs>(args?: SelectSubset<T, FeeInstallmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeInstallmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeeInstallment.
     * @param {FeeInstallmentDeleteArgs} args - Arguments to delete one FeeInstallment.
     * @example
     * // Delete one FeeInstallment
     * const FeeInstallment = await prisma.feeInstallment.delete({
     *   where: {
     *     // ... filter to delete one FeeInstallment
     *   }
     * })
     * 
     */
    delete<T extends FeeInstallmentDeleteArgs>(args: SelectSubset<T, FeeInstallmentDeleteArgs<ExtArgs>>): Prisma__FeeInstallmentClient<$Result.GetResult<Prisma.$FeeInstallmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeeInstallment.
     * @param {FeeInstallmentUpdateArgs} args - Arguments to update one FeeInstallment.
     * @example
     * // Update one FeeInstallment
     * const feeInstallment = await prisma.feeInstallment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeeInstallmentUpdateArgs>(args: SelectSubset<T, FeeInstallmentUpdateArgs<ExtArgs>>): Prisma__FeeInstallmentClient<$Result.GetResult<Prisma.$FeeInstallmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeeInstallments.
     * @param {FeeInstallmentDeleteManyArgs} args - Arguments to filter FeeInstallments to delete.
     * @example
     * // Delete a few FeeInstallments
     * const { count } = await prisma.feeInstallment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeeInstallmentDeleteManyArgs>(args?: SelectSubset<T, FeeInstallmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeeInstallments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeInstallmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeeInstallments
     * const feeInstallment = await prisma.feeInstallment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeeInstallmentUpdateManyArgs>(args: SelectSubset<T, FeeInstallmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeeInstallments and returns the data updated in the database.
     * @param {FeeInstallmentUpdateManyAndReturnArgs} args - Arguments to update many FeeInstallments.
     * @example
     * // Update many FeeInstallments
     * const feeInstallment = await prisma.feeInstallment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeeInstallments and only return the `id`
     * const feeInstallmentWithIdOnly = await prisma.feeInstallment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeeInstallmentUpdateManyAndReturnArgs>(args: SelectSubset<T, FeeInstallmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeInstallmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeeInstallment.
     * @param {FeeInstallmentUpsertArgs} args - Arguments to update or create a FeeInstallment.
     * @example
     * // Update or create a FeeInstallment
     * const feeInstallment = await prisma.feeInstallment.upsert({
     *   create: {
     *     // ... data to create a FeeInstallment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeeInstallment we want to update
     *   }
     * })
     */
    upsert<T extends FeeInstallmentUpsertArgs>(args: SelectSubset<T, FeeInstallmentUpsertArgs<ExtArgs>>): Prisma__FeeInstallmentClient<$Result.GetResult<Prisma.$FeeInstallmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeeInstallments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeInstallmentCountArgs} args - Arguments to filter FeeInstallments to count.
     * @example
     * // Count the number of FeeInstallments
     * const count = await prisma.feeInstallment.count({
     *   where: {
     *     // ... the filter for the FeeInstallments we want to count
     *   }
     * })
    **/
    count<T extends FeeInstallmentCountArgs>(
      args?: Subset<T, FeeInstallmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeeInstallmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeeInstallment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeInstallmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeeInstallmentAggregateArgs>(args: Subset<T, FeeInstallmentAggregateArgs>): Prisma.PrismaPromise<GetFeeInstallmentAggregateType<T>>

    /**
     * Group by FeeInstallment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeInstallmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeeInstallmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeeInstallmentGroupByArgs['orderBy'] }
        : { orderBy?: FeeInstallmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeeInstallmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeeInstallmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeeInstallment model
   */
  readonly fields: FeeInstallmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeeInstallment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeeInstallmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentFee<T extends StudentFeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentFeeDefaultArgs<ExtArgs>>): Prisma__StudentFeeClient<$Result.GetResult<Prisma.$StudentFeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends FeeInstallment$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, FeeInstallment$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeeInstallment model
   */
  interface FeeInstallmentFieldRefs {
    readonly id: FieldRef<"FeeInstallment", 'String'>
    readonly installmentNumber: FieldRef<"FeeInstallment", 'Int'>
    readonly month: FieldRef<"FeeInstallment", 'String'>
    readonly dueDate: FieldRef<"FeeInstallment", 'DateTime'>
    readonly amountDue: FieldRef<"FeeInstallment", 'Int'>
    readonly amountPaid: FieldRef<"FeeInstallment", 'Int'>
    readonly lateFee: FieldRef<"FeeInstallment", 'Int'>
    readonly status: FieldRef<"FeeInstallment", 'String'>
    readonly createdAt: FieldRef<"FeeInstallment", 'DateTime'>
    readonly updatedAt: FieldRef<"FeeInstallment", 'DateTime'>
    readonly studentFeeId: FieldRef<"FeeInstallment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FeeInstallment findUnique
   */
  export type FeeInstallmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInstallment
     */
    select?: FeeInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInstallment
     */
    omit?: FeeInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInstallmentInclude<ExtArgs> | null
    /**
     * Filter, which FeeInstallment to fetch.
     */
    where: FeeInstallmentWhereUniqueInput
  }

  /**
   * FeeInstallment findUniqueOrThrow
   */
  export type FeeInstallmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInstallment
     */
    select?: FeeInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInstallment
     */
    omit?: FeeInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInstallmentInclude<ExtArgs> | null
    /**
     * Filter, which FeeInstallment to fetch.
     */
    where: FeeInstallmentWhereUniqueInput
  }

  /**
   * FeeInstallment findFirst
   */
  export type FeeInstallmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInstallment
     */
    select?: FeeInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInstallment
     */
    omit?: FeeInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInstallmentInclude<ExtArgs> | null
    /**
     * Filter, which FeeInstallment to fetch.
     */
    where?: FeeInstallmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeInstallments to fetch.
     */
    orderBy?: FeeInstallmentOrderByWithRelationInput | FeeInstallmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeeInstallments.
     */
    cursor?: FeeInstallmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeInstallments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeInstallments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeeInstallments.
     */
    distinct?: FeeInstallmentScalarFieldEnum | FeeInstallmentScalarFieldEnum[]
  }

  /**
   * FeeInstallment findFirstOrThrow
   */
  export type FeeInstallmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInstallment
     */
    select?: FeeInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInstallment
     */
    omit?: FeeInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInstallmentInclude<ExtArgs> | null
    /**
     * Filter, which FeeInstallment to fetch.
     */
    where?: FeeInstallmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeInstallments to fetch.
     */
    orderBy?: FeeInstallmentOrderByWithRelationInput | FeeInstallmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeeInstallments.
     */
    cursor?: FeeInstallmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeInstallments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeInstallments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeeInstallments.
     */
    distinct?: FeeInstallmentScalarFieldEnum | FeeInstallmentScalarFieldEnum[]
  }

  /**
   * FeeInstallment findMany
   */
  export type FeeInstallmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInstallment
     */
    select?: FeeInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInstallment
     */
    omit?: FeeInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInstallmentInclude<ExtArgs> | null
    /**
     * Filter, which FeeInstallments to fetch.
     */
    where?: FeeInstallmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeInstallments to fetch.
     */
    orderBy?: FeeInstallmentOrderByWithRelationInput | FeeInstallmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeeInstallments.
     */
    cursor?: FeeInstallmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeInstallments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeInstallments.
     */
    skip?: number
    distinct?: FeeInstallmentScalarFieldEnum | FeeInstallmentScalarFieldEnum[]
  }

  /**
   * FeeInstallment create
   */
  export type FeeInstallmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInstallment
     */
    select?: FeeInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInstallment
     */
    omit?: FeeInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInstallmentInclude<ExtArgs> | null
    /**
     * The data needed to create a FeeInstallment.
     */
    data: XOR<FeeInstallmentCreateInput, FeeInstallmentUncheckedCreateInput>
  }

  /**
   * FeeInstallment createMany
   */
  export type FeeInstallmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeeInstallments.
     */
    data: FeeInstallmentCreateManyInput | FeeInstallmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeeInstallment createManyAndReturn
   */
  export type FeeInstallmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInstallment
     */
    select?: FeeInstallmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInstallment
     */
    omit?: FeeInstallmentOmit<ExtArgs> | null
    /**
     * The data used to create many FeeInstallments.
     */
    data: FeeInstallmentCreateManyInput | FeeInstallmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInstallmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeeInstallment update
   */
  export type FeeInstallmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInstallment
     */
    select?: FeeInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInstallment
     */
    omit?: FeeInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInstallmentInclude<ExtArgs> | null
    /**
     * The data needed to update a FeeInstallment.
     */
    data: XOR<FeeInstallmentUpdateInput, FeeInstallmentUncheckedUpdateInput>
    /**
     * Choose, which FeeInstallment to update.
     */
    where: FeeInstallmentWhereUniqueInput
  }

  /**
   * FeeInstallment updateMany
   */
  export type FeeInstallmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeeInstallments.
     */
    data: XOR<FeeInstallmentUpdateManyMutationInput, FeeInstallmentUncheckedUpdateManyInput>
    /**
     * Filter which FeeInstallments to update
     */
    where?: FeeInstallmentWhereInput
    /**
     * Limit how many FeeInstallments to update.
     */
    limit?: number
  }

  /**
   * FeeInstallment updateManyAndReturn
   */
  export type FeeInstallmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInstallment
     */
    select?: FeeInstallmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInstallment
     */
    omit?: FeeInstallmentOmit<ExtArgs> | null
    /**
     * The data used to update FeeInstallments.
     */
    data: XOR<FeeInstallmentUpdateManyMutationInput, FeeInstallmentUncheckedUpdateManyInput>
    /**
     * Filter which FeeInstallments to update
     */
    where?: FeeInstallmentWhereInput
    /**
     * Limit how many FeeInstallments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInstallmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeeInstallment upsert
   */
  export type FeeInstallmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInstallment
     */
    select?: FeeInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInstallment
     */
    omit?: FeeInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInstallmentInclude<ExtArgs> | null
    /**
     * The filter to search for the FeeInstallment to update in case it exists.
     */
    where: FeeInstallmentWhereUniqueInput
    /**
     * In case the FeeInstallment found by the `where` argument doesn't exist, create a new FeeInstallment with this data.
     */
    create: XOR<FeeInstallmentCreateInput, FeeInstallmentUncheckedCreateInput>
    /**
     * In case the FeeInstallment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeeInstallmentUpdateInput, FeeInstallmentUncheckedUpdateInput>
  }

  /**
   * FeeInstallment delete
   */
  export type FeeInstallmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInstallment
     */
    select?: FeeInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInstallment
     */
    omit?: FeeInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInstallmentInclude<ExtArgs> | null
    /**
     * Filter which FeeInstallment to delete.
     */
    where: FeeInstallmentWhereUniqueInput
  }

  /**
   * FeeInstallment deleteMany
   */
  export type FeeInstallmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeeInstallments to delete
     */
    where?: FeeInstallmentWhereInput
    /**
     * Limit how many FeeInstallments to delete.
     */
    limit?: number
  }

  /**
   * FeeInstallment.payments
   */
  export type FeeInstallment$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
    where?: FeePaymentWhereInput
    orderBy?: FeePaymentOrderByWithRelationInput | FeePaymentOrderByWithRelationInput[]
    cursor?: FeePaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeePaymentScalarFieldEnum | FeePaymentScalarFieldEnum[]
  }

  /**
   * FeeInstallment without action
   */
  export type FeeInstallmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInstallment
     */
    select?: FeeInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInstallment
     */
    omit?: FeeInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInstallmentInclude<ExtArgs> | null
  }


  /**
   * Model FeePayment
   */

  export type AggregateFeePayment = {
    _count: FeePaymentCountAggregateOutputType | null
    _avg: FeePaymentAvgAggregateOutputType | null
    _sum: FeePaymentSumAggregateOutputType | null
    _min: FeePaymentMinAggregateOutputType | null
    _max: FeePaymentMaxAggregateOutputType | null
  }

  export type FeePaymentAvgAggregateOutputType = {
    amountPaid: number | null
  }

  export type FeePaymentSumAggregateOutputType = {
    amountPaid: number | null
  }

  export type FeePaymentMinAggregateOutputType = {
    id: string | null
    amountPaid: number | null
    paymentDate: Date | null
    paymentMethod: string | null
    transactionId: string | null
    receiptNumber: string | null
    paymentFor: string | null
    remarks: string | null
    paidBy: string | null
    createdAt: Date | null
    studentId: string | null
    installmentId: string | null
  }

  export type FeePaymentMaxAggregateOutputType = {
    id: string | null
    amountPaid: number | null
    paymentDate: Date | null
    paymentMethod: string | null
    transactionId: string | null
    receiptNumber: string | null
    paymentFor: string | null
    remarks: string | null
    paidBy: string | null
    createdAt: Date | null
    studentId: string | null
    installmentId: string | null
  }

  export type FeePaymentCountAggregateOutputType = {
    id: number
    amountPaid: number
    paymentDate: number
    paymentMethod: number
    transactionId: number
    receiptNumber: number
    paymentFor: number
    remarks: number
    paidBy: number
    createdAt: number
    studentId: number
    installmentId: number
    _all: number
  }


  export type FeePaymentAvgAggregateInputType = {
    amountPaid?: true
  }

  export type FeePaymentSumAggregateInputType = {
    amountPaid?: true
  }

  export type FeePaymentMinAggregateInputType = {
    id?: true
    amountPaid?: true
    paymentDate?: true
    paymentMethod?: true
    transactionId?: true
    receiptNumber?: true
    paymentFor?: true
    remarks?: true
    paidBy?: true
    createdAt?: true
    studentId?: true
    installmentId?: true
  }

  export type FeePaymentMaxAggregateInputType = {
    id?: true
    amountPaid?: true
    paymentDate?: true
    paymentMethod?: true
    transactionId?: true
    receiptNumber?: true
    paymentFor?: true
    remarks?: true
    paidBy?: true
    createdAt?: true
    studentId?: true
    installmentId?: true
  }

  export type FeePaymentCountAggregateInputType = {
    id?: true
    amountPaid?: true
    paymentDate?: true
    paymentMethod?: true
    transactionId?: true
    receiptNumber?: true
    paymentFor?: true
    remarks?: true
    paidBy?: true
    createdAt?: true
    studentId?: true
    installmentId?: true
    _all?: true
  }

  export type FeePaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeePayment to aggregate.
     */
    where?: FeePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeePayments to fetch.
     */
    orderBy?: FeePaymentOrderByWithRelationInput | FeePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeePayments
    **/
    _count?: true | FeePaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeePaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeePaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeePaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeePaymentMaxAggregateInputType
  }

  export type GetFeePaymentAggregateType<T extends FeePaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateFeePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeePayment[P]>
      : GetScalarType<T[P], AggregateFeePayment[P]>
  }




  export type FeePaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeePaymentWhereInput
    orderBy?: FeePaymentOrderByWithAggregationInput | FeePaymentOrderByWithAggregationInput[]
    by: FeePaymentScalarFieldEnum[] | FeePaymentScalarFieldEnum
    having?: FeePaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeePaymentCountAggregateInputType | true
    _avg?: FeePaymentAvgAggregateInputType
    _sum?: FeePaymentSumAggregateInputType
    _min?: FeePaymentMinAggregateInputType
    _max?: FeePaymentMaxAggregateInputType
  }

  export type FeePaymentGroupByOutputType = {
    id: string
    amountPaid: number
    paymentDate: Date
    paymentMethod: string
    transactionId: string | null
    receiptNumber: string
    paymentFor: string
    remarks: string | null
    paidBy: string | null
    createdAt: Date
    studentId: string
    installmentId: string | null
    _count: FeePaymentCountAggregateOutputType | null
    _avg: FeePaymentAvgAggregateOutputType | null
    _sum: FeePaymentSumAggregateOutputType | null
    _min: FeePaymentMinAggregateOutputType | null
    _max: FeePaymentMaxAggregateOutputType | null
  }

  type GetFeePaymentGroupByPayload<T extends FeePaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeePaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeePaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeePaymentGroupByOutputType[P]>
            : GetScalarType<T[P], FeePaymentGroupByOutputType[P]>
        }
      >
    >


  export type FeePaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountPaid?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
    transactionId?: boolean
    receiptNumber?: boolean
    paymentFor?: boolean
    remarks?: boolean
    paidBy?: boolean
    createdAt?: boolean
    studentId?: boolean
    installmentId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    installment?: boolean | FeePayment$installmentArgs<ExtArgs>
  }, ExtArgs["result"]["feePayment"]>

  export type FeePaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountPaid?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
    transactionId?: boolean
    receiptNumber?: boolean
    paymentFor?: boolean
    remarks?: boolean
    paidBy?: boolean
    createdAt?: boolean
    studentId?: boolean
    installmentId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    installment?: boolean | FeePayment$installmentArgs<ExtArgs>
  }, ExtArgs["result"]["feePayment"]>

  export type FeePaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountPaid?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
    transactionId?: boolean
    receiptNumber?: boolean
    paymentFor?: boolean
    remarks?: boolean
    paidBy?: boolean
    createdAt?: boolean
    studentId?: boolean
    installmentId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    installment?: boolean | FeePayment$installmentArgs<ExtArgs>
  }, ExtArgs["result"]["feePayment"]>

  export type FeePaymentSelectScalar = {
    id?: boolean
    amountPaid?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
    transactionId?: boolean
    receiptNumber?: boolean
    paymentFor?: boolean
    remarks?: boolean
    paidBy?: boolean
    createdAt?: boolean
    studentId?: boolean
    installmentId?: boolean
  }

  export type FeePaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amountPaid" | "paymentDate" | "paymentMethod" | "transactionId" | "receiptNumber" | "paymentFor" | "remarks" | "paidBy" | "createdAt" | "studentId" | "installmentId", ExtArgs["result"]["feePayment"]>
  export type FeePaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    installment?: boolean | FeePayment$installmentArgs<ExtArgs>
  }
  export type FeePaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    installment?: boolean | FeePayment$installmentArgs<ExtArgs>
  }
  export type FeePaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    installment?: boolean | FeePayment$installmentArgs<ExtArgs>
  }

  export type $FeePaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeePayment"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      installment: Prisma.$FeeInstallmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amountPaid: number
      paymentDate: Date
      paymentMethod: string
      transactionId: string | null
      receiptNumber: string
      paymentFor: string
      remarks: string | null
      paidBy: string | null
      createdAt: Date
      studentId: string
      installmentId: string | null
    }, ExtArgs["result"]["feePayment"]>
    composites: {}
  }

  type FeePaymentGetPayload<S extends boolean | null | undefined | FeePaymentDefaultArgs> = $Result.GetResult<Prisma.$FeePaymentPayload, S>

  type FeePaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeePaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeePaymentCountAggregateInputType | true
    }

  export interface FeePaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeePayment'], meta: { name: 'FeePayment' } }
    /**
     * Find zero or one FeePayment that matches the filter.
     * @param {FeePaymentFindUniqueArgs} args - Arguments to find a FeePayment
     * @example
     * // Get one FeePayment
     * const feePayment = await prisma.feePayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeePaymentFindUniqueArgs>(args: SelectSubset<T, FeePaymentFindUniqueArgs<ExtArgs>>): Prisma__FeePaymentClient<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeePayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeePaymentFindUniqueOrThrowArgs} args - Arguments to find a FeePayment
     * @example
     * // Get one FeePayment
     * const feePayment = await prisma.feePayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeePaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, FeePaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeePaymentClient<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeePayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeePaymentFindFirstArgs} args - Arguments to find a FeePayment
     * @example
     * // Get one FeePayment
     * const feePayment = await prisma.feePayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeePaymentFindFirstArgs>(args?: SelectSubset<T, FeePaymentFindFirstArgs<ExtArgs>>): Prisma__FeePaymentClient<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeePayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeePaymentFindFirstOrThrowArgs} args - Arguments to find a FeePayment
     * @example
     * // Get one FeePayment
     * const feePayment = await prisma.feePayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeePaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, FeePaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeePaymentClient<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeePayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeePaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeePayments
     * const feePayments = await prisma.feePayment.findMany()
     * 
     * // Get first 10 FeePayments
     * const feePayments = await prisma.feePayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feePaymentWithIdOnly = await prisma.feePayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeePaymentFindManyArgs>(args?: SelectSubset<T, FeePaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeePayment.
     * @param {FeePaymentCreateArgs} args - Arguments to create a FeePayment.
     * @example
     * // Create one FeePayment
     * const FeePayment = await prisma.feePayment.create({
     *   data: {
     *     // ... data to create a FeePayment
     *   }
     * })
     * 
     */
    create<T extends FeePaymentCreateArgs>(args: SelectSubset<T, FeePaymentCreateArgs<ExtArgs>>): Prisma__FeePaymentClient<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeePayments.
     * @param {FeePaymentCreateManyArgs} args - Arguments to create many FeePayments.
     * @example
     * // Create many FeePayments
     * const feePayment = await prisma.feePayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeePaymentCreateManyArgs>(args?: SelectSubset<T, FeePaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeePayments and returns the data saved in the database.
     * @param {FeePaymentCreateManyAndReturnArgs} args - Arguments to create many FeePayments.
     * @example
     * // Create many FeePayments
     * const feePayment = await prisma.feePayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeePayments and only return the `id`
     * const feePaymentWithIdOnly = await prisma.feePayment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeePaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, FeePaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeePayment.
     * @param {FeePaymentDeleteArgs} args - Arguments to delete one FeePayment.
     * @example
     * // Delete one FeePayment
     * const FeePayment = await prisma.feePayment.delete({
     *   where: {
     *     // ... filter to delete one FeePayment
     *   }
     * })
     * 
     */
    delete<T extends FeePaymentDeleteArgs>(args: SelectSubset<T, FeePaymentDeleteArgs<ExtArgs>>): Prisma__FeePaymentClient<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeePayment.
     * @param {FeePaymentUpdateArgs} args - Arguments to update one FeePayment.
     * @example
     * // Update one FeePayment
     * const feePayment = await prisma.feePayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeePaymentUpdateArgs>(args: SelectSubset<T, FeePaymentUpdateArgs<ExtArgs>>): Prisma__FeePaymentClient<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeePayments.
     * @param {FeePaymentDeleteManyArgs} args - Arguments to filter FeePayments to delete.
     * @example
     * // Delete a few FeePayments
     * const { count } = await prisma.feePayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeePaymentDeleteManyArgs>(args?: SelectSubset<T, FeePaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeePayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeePaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeePayments
     * const feePayment = await prisma.feePayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeePaymentUpdateManyArgs>(args: SelectSubset<T, FeePaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeePayments and returns the data updated in the database.
     * @param {FeePaymentUpdateManyAndReturnArgs} args - Arguments to update many FeePayments.
     * @example
     * // Update many FeePayments
     * const feePayment = await prisma.feePayment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeePayments and only return the `id`
     * const feePaymentWithIdOnly = await prisma.feePayment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeePaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, FeePaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeePayment.
     * @param {FeePaymentUpsertArgs} args - Arguments to update or create a FeePayment.
     * @example
     * // Update or create a FeePayment
     * const feePayment = await prisma.feePayment.upsert({
     *   create: {
     *     // ... data to create a FeePayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeePayment we want to update
     *   }
     * })
     */
    upsert<T extends FeePaymentUpsertArgs>(args: SelectSubset<T, FeePaymentUpsertArgs<ExtArgs>>): Prisma__FeePaymentClient<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeePayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeePaymentCountArgs} args - Arguments to filter FeePayments to count.
     * @example
     * // Count the number of FeePayments
     * const count = await prisma.feePayment.count({
     *   where: {
     *     // ... the filter for the FeePayments we want to count
     *   }
     * })
    **/
    count<T extends FeePaymentCountArgs>(
      args?: Subset<T, FeePaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeePaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeePayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeePaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeePaymentAggregateArgs>(args: Subset<T, FeePaymentAggregateArgs>): Prisma.PrismaPromise<GetFeePaymentAggregateType<T>>

    /**
     * Group by FeePayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeePaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeePaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeePaymentGroupByArgs['orderBy'] }
        : { orderBy?: FeePaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeePaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeePaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeePayment model
   */
  readonly fields: FeePaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeePayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeePaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    installment<T extends FeePayment$installmentArgs<ExtArgs> = {}>(args?: Subset<T, FeePayment$installmentArgs<ExtArgs>>): Prisma__FeeInstallmentClient<$Result.GetResult<Prisma.$FeeInstallmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeePayment model
   */
  interface FeePaymentFieldRefs {
    readonly id: FieldRef<"FeePayment", 'String'>
    readonly amountPaid: FieldRef<"FeePayment", 'Int'>
    readonly paymentDate: FieldRef<"FeePayment", 'DateTime'>
    readonly paymentMethod: FieldRef<"FeePayment", 'String'>
    readonly transactionId: FieldRef<"FeePayment", 'String'>
    readonly receiptNumber: FieldRef<"FeePayment", 'String'>
    readonly paymentFor: FieldRef<"FeePayment", 'String'>
    readonly remarks: FieldRef<"FeePayment", 'String'>
    readonly paidBy: FieldRef<"FeePayment", 'String'>
    readonly createdAt: FieldRef<"FeePayment", 'DateTime'>
    readonly studentId: FieldRef<"FeePayment", 'String'>
    readonly installmentId: FieldRef<"FeePayment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FeePayment findUnique
   */
  export type FeePaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
    /**
     * Filter, which FeePayment to fetch.
     */
    where: FeePaymentWhereUniqueInput
  }

  /**
   * FeePayment findUniqueOrThrow
   */
  export type FeePaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
    /**
     * Filter, which FeePayment to fetch.
     */
    where: FeePaymentWhereUniqueInput
  }

  /**
   * FeePayment findFirst
   */
  export type FeePaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
    /**
     * Filter, which FeePayment to fetch.
     */
    where?: FeePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeePayments to fetch.
     */
    orderBy?: FeePaymentOrderByWithRelationInput | FeePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeePayments.
     */
    cursor?: FeePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeePayments.
     */
    distinct?: FeePaymentScalarFieldEnum | FeePaymentScalarFieldEnum[]
  }

  /**
   * FeePayment findFirstOrThrow
   */
  export type FeePaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
    /**
     * Filter, which FeePayment to fetch.
     */
    where?: FeePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeePayments to fetch.
     */
    orderBy?: FeePaymentOrderByWithRelationInput | FeePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeePayments.
     */
    cursor?: FeePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeePayments.
     */
    distinct?: FeePaymentScalarFieldEnum | FeePaymentScalarFieldEnum[]
  }

  /**
   * FeePayment findMany
   */
  export type FeePaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
    /**
     * Filter, which FeePayments to fetch.
     */
    where?: FeePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeePayments to fetch.
     */
    orderBy?: FeePaymentOrderByWithRelationInput | FeePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeePayments.
     */
    cursor?: FeePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeePayments.
     */
    skip?: number
    distinct?: FeePaymentScalarFieldEnum | FeePaymentScalarFieldEnum[]
  }

  /**
   * FeePayment create
   */
  export type FeePaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a FeePayment.
     */
    data: XOR<FeePaymentCreateInput, FeePaymentUncheckedCreateInput>
  }

  /**
   * FeePayment createMany
   */
  export type FeePaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeePayments.
     */
    data: FeePaymentCreateManyInput | FeePaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeePayment createManyAndReturn
   */
  export type FeePaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * The data used to create many FeePayments.
     */
    data: FeePaymentCreateManyInput | FeePaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeePayment update
   */
  export type FeePaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a FeePayment.
     */
    data: XOR<FeePaymentUpdateInput, FeePaymentUncheckedUpdateInput>
    /**
     * Choose, which FeePayment to update.
     */
    where: FeePaymentWhereUniqueInput
  }

  /**
   * FeePayment updateMany
   */
  export type FeePaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeePayments.
     */
    data: XOR<FeePaymentUpdateManyMutationInput, FeePaymentUncheckedUpdateManyInput>
    /**
     * Filter which FeePayments to update
     */
    where?: FeePaymentWhereInput
    /**
     * Limit how many FeePayments to update.
     */
    limit?: number
  }

  /**
   * FeePayment updateManyAndReturn
   */
  export type FeePaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * The data used to update FeePayments.
     */
    data: XOR<FeePaymentUpdateManyMutationInput, FeePaymentUncheckedUpdateManyInput>
    /**
     * Filter which FeePayments to update
     */
    where?: FeePaymentWhereInput
    /**
     * Limit how many FeePayments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeePayment upsert
   */
  export type FeePaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the FeePayment to update in case it exists.
     */
    where: FeePaymentWhereUniqueInput
    /**
     * In case the FeePayment found by the `where` argument doesn't exist, create a new FeePayment with this data.
     */
    create: XOR<FeePaymentCreateInput, FeePaymentUncheckedCreateInput>
    /**
     * In case the FeePayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeePaymentUpdateInput, FeePaymentUncheckedUpdateInput>
  }

  /**
   * FeePayment delete
   */
  export type FeePaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
    /**
     * Filter which FeePayment to delete.
     */
    where: FeePaymentWhereUniqueInput
  }

  /**
   * FeePayment deleteMany
   */
  export type FeePaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeePayments to delete
     */
    where?: FeePaymentWhereInput
    /**
     * Limit how many FeePayments to delete.
     */
    limit?: number
  }

  /**
   * FeePayment.installment
   */
  export type FeePayment$installmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInstallment
     */
    select?: FeeInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInstallment
     */
    omit?: FeeInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInstallmentInclude<ExtArgs> | null
    where?: FeeInstallmentWhereInput
  }

  /**
   * FeePayment without action
   */
  export type FeePaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
  }


  /**
   * Model Route
   */

  export type AggregateRoute = {
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  export type RouteAvgAggregateOutputType = {
    capacity: number | null
  }

  export type RouteSumAggregateOutputType = {
    capacity: number | null
  }

  export type RouteMinAggregateOutputType = {
    id: string | null
    routeName: string | null
    vehicleNumber: string | null
    driverName: string | null
    driverMobile: string | null
    capacity: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    schoolId: string | null
  }

  export type RouteMaxAggregateOutputType = {
    id: string | null
    routeName: string | null
    vehicleNumber: string | null
    driverName: string | null
    driverMobile: string | null
    capacity: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    schoolId: string | null
  }

  export type RouteCountAggregateOutputType = {
    id: number
    routeName: number
    stops: number
    vehicleNumber: number
    driverName: number
    driverMobile: number
    capacity: number
    isActive: number
    createdAt: number
    updatedAt: number
    schoolId: number
    _all: number
  }


  export type RouteAvgAggregateInputType = {
    capacity?: true
  }

  export type RouteSumAggregateInputType = {
    capacity?: true
  }

  export type RouteMinAggregateInputType = {
    id?: true
    routeName?: true
    vehicleNumber?: true
    driverName?: true
    driverMobile?: true
    capacity?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    schoolId?: true
  }

  export type RouteMaxAggregateInputType = {
    id?: true
    routeName?: true
    vehicleNumber?: true
    driverName?: true
    driverMobile?: true
    capacity?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    schoolId?: true
  }

  export type RouteCountAggregateInputType = {
    id?: true
    routeName?: true
    stops?: true
    vehicleNumber?: true
    driverName?: true
    driverMobile?: true
    capacity?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    schoolId?: true
    _all?: true
  }

  export type RouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Route to aggregate.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteMaxAggregateInputType
  }

  export type GetRouteAggregateType<T extends RouteAggregateArgs> = {
        [P in keyof T & keyof AggregateRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoute[P]>
      : GetScalarType<T[P], AggregateRoute[P]>
  }




  export type RouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithAggregationInput | RouteOrderByWithAggregationInput[]
    by: RouteScalarFieldEnum[] | RouteScalarFieldEnum
    having?: RouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteCountAggregateInputType | true
    _avg?: RouteAvgAggregateInputType
    _sum?: RouteSumAggregateInputType
    _min?: RouteMinAggregateInputType
    _max?: RouteMaxAggregateInputType
  }

  export type RouteGroupByOutputType = {
    id: string
    routeName: string
    stops: string[]
    vehicleNumber: string
    driverName: string
    driverMobile: string
    capacity: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    schoolId: string
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  type GetRouteGroupByPayload<T extends RouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteGroupByOutputType[P]>
            : GetScalarType<T[P], RouteGroupByOutputType[P]>
        }
      >
    >


  export type RouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeName?: boolean
    stops?: boolean
    vehicleNumber?: boolean
    driverName?: boolean
    driverMobile?: boolean
    capacity?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schoolId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    students?: boolean | Route$studentsArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeName?: boolean
    stops?: boolean
    vehicleNumber?: boolean
    driverName?: boolean
    driverMobile?: boolean
    capacity?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schoolId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeName?: boolean
    stops?: boolean
    vehicleNumber?: boolean
    driverName?: boolean
    driverMobile?: boolean
    capacity?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schoolId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectScalar = {
    id?: boolean
    routeName?: boolean
    stops?: boolean
    vehicleNumber?: boolean
    driverName?: boolean
    driverMobile?: boolean
    capacity?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schoolId?: boolean
  }

  export type RouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "routeName" | "stops" | "vehicleNumber" | "driverName" | "driverMobile" | "capacity" | "isActive" | "createdAt" | "updatedAt" | "schoolId", ExtArgs["result"]["route"]>
  export type RouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    students?: boolean | Route$studentsArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RouteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type RouteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $RoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Route"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      routeName: string
      stops: string[]
      vehicleNumber: string
      driverName: string
      driverMobile: string
      capacity: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      schoolId: string
    }, ExtArgs["result"]["route"]>
    composites: {}
  }

  type RouteGetPayload<S extends boolean | null | undefined | RouteDefaultArgs> = $Result.GetResult<Prisma.$RoutePayload, S>

  type RouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteCountAggregateInputType | true
    }

  export interface RouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Route'], meta: { name: 'Route' } }
    /**
     * Find zero or one Route that matches the filter.
     * @param {RouteFindUniqueArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteFindUniqueArgs>(args: SelectSubset<T, RouteFindUniqueArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Route that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteFindUniqueOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteFindFirstArgs>(args?: SelectSubset<T, RouteFindFirstArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.route.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.route.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeWithIdOnly = await prisma.route.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteFindManyArgs>(args?: SelectSubset<T, RouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Route.
     * @param {RouteCreateArgs} args - Arguments to create a Route.
     * @example
     * // Create one Route
     * const Route = await prisma.route.create({
     *   data: {
     *     // ... data to create a Route
     *   }
     * })
     * 
     */
    create<T extends RouteCreateArgs>(args: SelectSubset<T, RouteCreateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {RouteCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteCreateManyArgs>(args?: SelectSubset<T, RouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routes and returns the data saved in the database.
     * @param {RouteCreateManyAndReturnArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Route.
     * @param {RouteDeleteArgs} args - Arguments to delete one Route.
     * @example
     * // Delete one Route
     * const Route = await prisma.route.delete({
     *   where: {
     *     // ... filter to delete one Route
     *   }
     * })
     * 
     */
    delete<T extends RouteDeleteArgs>(args: SelectSubset<T, RouteDeleteArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Route.
     * @param {RouteUpdateArgs} args - Arguments to update one Route.
     * @example
     * // Update one Route
     * const route = await prisma.route.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteUpdateArgs>(args: SelectSubset<T, RouteUpdateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {RouteDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.route.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteDeleteManyArgs>(args?: SelectSubset<T, RouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteUpdateManyArgs>(args: SelectSubset<T, RouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes and returns the data updated in the database.
     * @param {RouteUpdateManyAndReturnArgs} args - Arguments to update many Routes.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RouteUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Route.
     * @param {RouteUpsertArgs} args - Arguments to update or create a Route.
     * @example
     * // Update or create a Route
     * const route = await prisma.route.upsert({
     *   create: {
     *     // ... data to create a Route
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Route we want to update
     *   }
     * })
     */
    upsert<T extends RouteUpsertArgs>(args: SelectSubset<T, RouteUpsertArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.route.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RouteCountArgs>(
      args?: Subset<T, RouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteAggregateArgs>(args: Subset<T, RouteAggregateArgs>): Prisma.PrismaPromise<GetRouteAggregateType<T>>

    /**
     * Group by Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteGroupByArgs['orderBy'] }
        : { orderBy?: RouteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Route model
   */
  readonly fields: RouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Route.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends Route$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Route$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Route model
   */
  interface RouteFieldRefs {
    readonly id: FieldRef<"Route", 'String'>
    readonly routeName: FieldRef<"Route", 'String'>
    readonly stops: FieldRef<"Route", 'String[]'>
    readonly vehicleNumber: FieldRef<"Route", 'String'>
    readonly driverName: FieldRef<"Route", 'String'>
    readonly driverMobile: FieldRef<"Route", 'String'>
    readonly capacity: FieldRef<"Route", 'Int'>
    readonly isActive: FieldRef<"Route", 'Boolean'>
    readonly createdAt: FieldRef<"Route", 'DateTime'>
    readonly updatedAt: FieldRef<"Route", 'DateTime'>
    readonly schoolId: FieldRef<"Route", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Route findUnique
   */
  export type RouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findUniqueOrThrow
   */
  export type RouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findFirst
   */
  export type RouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findFirstOrThrow
   */
  export type RouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findMany
   */
  export type RouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route create
   */
  export type RouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to create a Route.
     */
    data: XOR<RouteCreateInput, RouteUncheckedCreateInput>
  }

  /**
   * Route createMany
   */
  export type RouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route createManyAndReturn
   */
  export type RouteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Route update
   */
  export type RouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to update a Route.
     */
    data: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
    /**
     * Choose, which Route to update.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route updateMany
   */
  export type RouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route updateManyAndReturn
   */
  export type RouteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Route upsert
   */
  export type RouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The filter to search for the Route to update in case it exists.
     */
    where: RouteWhereUniqueInput
    /**
     * In case the Route found by the `where` argument doesn't exist, create a new Route with this data.
     */
    create: XOR<RouteCreateInput, RouteUncheckedCreateInput>
    /**
     * In case the Route was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
  }

  /**
   * Route delete
   */
  export type RouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter which Route to delete.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route deleteMany
   */
  export type RouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to delete.
     */
    limit?: number
  }

  /**
   * Route.students
   */
  export type Route$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Route without action
   */
  export type RouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SchoolScalarFieldEnum: {
    id: 'id',
    schoolName: 'schoolName',
    schoolType: 'schoolType',
    boardAffiliation: 'boardAffiliation',
    establishmentYear: 'establishmentYear',
    schoolCode: 'schoolCode',
    udiseCode: 'udiseCode',
    schoolCategory: 'schoolCategory',
    officialEmail: 'officialEmail',
    landlineNumber: 'landlineNumber',
    mobileNumber: 'mobileNumber',
    alternativeMobile: 'alternativeMobile',
    website: 'website',
    schoolAddress: 'schoolAddress',
    city: 'city',
    state: 'state',
    pinCode: 'pinCode',
    country: 'country',
    adminName: 'adminName',
    adminDesignation: 'adminDesignation',
    adminEmail: 'adminEmail',
    adminPassword: 'adminPassword',
    confirmPassword: 'confirmPassword',
    adminMobile: 'adminMobile',
    studentStrength: 'studentStrength',
    teachingStaff: 'teachingStaff',
    nonTeachingStaff: 'nonTeachingStaff',
    totalClasses: 'totalClasses',
    mediumOfInstruction: 'mediumOfInstruction',
    streamsOffered: 'streamsOffered',
    plan: 'plan',
    billingCycle: 'billingCycle',
    termsAccepted: 'termsAccepted',
    privacyAccepted: 'privacyAccepted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const PasswordResetScalarFieldEnum: {
    id: 'id',
    adminEmail: 'adminEmail',
    otpSecret: 'otpSecret',
    hashedOtp: 'hashedOtp',
    expiresAt: 'expiresAt',
    attempts: 'attempts',
    createdAt: 'createdAt'
  };

  export type PasswordResetScalarFieldEnum = (typeof PasswordResetScalarFieldEnum)[keyof typeof PasswordResetScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    admissionNumber: 'admissionNumber',
    qrCodeValue: 'qrCodeValue',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    bloodGroup: 'bloodGroup',
    aadharNumber: 'aadharNumber',
    photoUrl: 'photoUrl',
    parentPrimaryMobile: 'parentPrimaryMobile',
    parentAlternateMobile: 'parentAlternateMobile',
    parentEmail: 'parentEmail',
    emergencyContactName: 'emergencyContactName',
    emergencyContactPhone: 'emergencyContactPhone',
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    city: 'city',
    state: 'state',
    pinCode: 'pinCode',
    country: 'country',
    admissionDate: 'admissionDate',
    previousSchoolId: 'previousSchoolId',
    usesTransport: 'usesTransport',
    transportRouteId: 'transportRouteId',
    pickupPoint: 'pickupPoint',
    dropPoint: 'dropPoint',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    schoolId: 'schoolId',
    parentId: 'parentId'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const StudentAcademicHistoryScalarFieldEnum: {
    id: 'id',
    academicYear: 'academicYear',
    class: 'class',
    section: 'section',
    rollNumber: 'rollNumber',
    classTeacher: 'classTeacher',
    promotionStatus: 'promotionStatus',
    attendancePresent: 'attendancePresent',
    attendanceAbsent: 'attendanceAbsent',
    finalGrade: 'finalGrade',
    remarks: 'remarks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    studentId: 'studentId'
  };

  export type StudentAcademicHistoryScalarFieldEnum = (typeof StudentAcademicHistoryScalarFieldEnum)[keyof typeof StudentAcademicHistoryScalarFieldEnum]


  export const ParentScalarFieldEnum: {
    id: 'id',
    fatherName: 'fatherName',
    fatherOccupation: 'fatherOccupation',
    fatherMobile: 'fatherMobile',
    fatherEmail: 'fatherEmail',
    fatherAadhar: 'fatherAadhar',
    motherName: 'motherName',
    motherOccupation: 'motherOccupation',
    motherMobile: 'motherMobile',
    motherEmail: 'motherEmail',
    motherAadhar: 'motherAadhar',
    guardianName: 'guardianName',
    guardianRelation: 'guardianRelation',
    guardianMobile: 'guardianMobile',
    guardianEmail: 'guardianEmail',
    primaryContact: 'primaryContact',
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    city: 'city',
    state: 'state',
    pinCode: 'pinCode',
    country: 'country',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    schoolId: 'schoolId'
  };

  export type ParentScalarFieldEnum = (typeof ParentScalarFieldEnum)[keyof typeof ParentScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    documentType: 'documentType',
    documentUrl: 'documentUrl',
    fileName: 'fileName',
    fileSize: 'fileSize',
    mimeType: 'mimeType',
    verificationStatus: 'verificationStatus',
    verifiedBy: 'verifiedBy',
    verifiedAt: 'verifiedAt',
    rejectionReason: 'rejectionReason',
    uploadedAt: 'uploadedAt',
    updatedAt: 'updatedAt',
    studentId: 'studentId'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const FeeStructureScalarFieldEnum: {
    id: 'id',
    class: 'class',
    academicYear: 'academicYear',
    tuitionFeeMonthly: 'tuitionFeeMonthly',
    transportFeeMonthly: 'transportFeeMonthly',
    examFeeYearly: 'examFeeYearly',
    admissionFee: 'admissionFee',
    booksFee: 'booksFee',
    idCardFee: 'idCardFee',
    activityFee: 'activityFee',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    schoolId: 'schoolId'
  };

  export type FeeStructureScalarFieldEnum = (typeof FeeStructureScalarFieldEnum)[keyof typeof FeeStructureScalarFieldEnum]


  export const StudentFeeScalarFieldEnum: {
    id: 'id',
    academicYear: 'academicYear',
    tuitionFee: 'tuitionFee',
    transportFee: 'transportFee',
    examFee: 'examFee',
    admissionFee: 'admissionFee',
    otherFees: 'otherFees',
    discountPercentage: 'discountPercentage',
    discountAmount: 'discountAmount',
    specialCharges: 'specialCharges',
    totalFee: 'totalFee',
    totalPayable: 'totalPayable',
    totalPaid: 'totalPaid',
    totalPending: 'totalPending',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    studentId: 'studentId'
  };

  export type StudentFeeScalarFieldEnum = (typeof StudentFeeScalarFieldEnum)[keyof typeof StudentFeeScalarFieldEnum]


  export const FeeInstallmentScalarFieldEnum: {
    id: 'id',
    installmentNumber: 'installmentNumber',
    month: 'month',
    dueDate: 'dueDate',
    amountDue: 'amountDue',
    amountPaid: 'amountPaid',
    lateFee: 'lateFee',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    studentFeeId: 'studentFeeId'
  };

  export type FeeInstallmentScalarFieldEnum = (typeof FeeInstallmentScalarFieldEnum)[keyof typeof FeeInstallmentScalarFieldEnum]


  export const FeePaymentScalarFieldEnum: {
    id: 'id',
    amountPaid: 'amountPaid',
    paymentDate: 'paymentDate',
    paymentMethod: 'paymentMethod',
    transactionId: 'transactionId',
    receiptNumber: 'receiptNumber',
    paymentFor: 'paymentFor',
    remarks: 'remarks',
    paidBy: 'paidBy',
    createdAt: 'createdAt',
    studentId: 'studentId',
    installmentId: 'installmentId'
  };

  export type FeePaymentScalarFieldEnum = (typeof FeePaymentScalarFieldEnum)[keyof typeof FeePaymentScalarFieldEnum]


  export const RouteScalarFieldEnum: {
    id: 'id',
    routeName: 'routeName',
    stops: 'stops',
    vehicleNumber: 'vehicleNumber',
    driverName: 'driverName',
    driverMobile: 'driverMobile',
    capacity: 'capacity',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    schoolId: 'schoolId'
  };

  export type RouteScalarFieldEnum = (typeof RouteScalarFieldEnum)[keyof typeof RouteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: StringFilter<"School"> | string
    schoolName?: StringFilter<"School"> | string
    schoolType?: StringFilter<"School"> | string
    boardAffiliation?: StringFilter<"School"> | string
    establishmentYear?: StringFilter<"School"> | string
    schoolCode?: StringFilter<"School"> | string
    udiseCode?: StringNullableFilter<"School"> | string | null
    schoolCategory?: StringFilter<"School"> | string
    officialEmail?: StringFilter<"School"> | string
    landlineNumber?: StringNullableFilter<"School"> | string | null
    mobileNumber?: StringFilter<"School"> | string
    alternativeMobile?: StringNullableFilter<"School"> | string | null
    website?: StringNullableFilter<"School"> | string | null
    schoolAddress?: StringFilter<"School"> | string
    city?: StringFilter<"School"> | string
    state?: StringFilter<"School"> | string
    pinCode?: StringFilter<"School"> | string
    country?: StringFilter<"School"> | string
    adminName?: StringFilter<"School"> | string
    adminDesignation?: StringFilter<"School"> | string
    adminEmail?: StringFilter<"School"> | string
    adminPassword?: StringFilter<"School"> | string
    confirmPassword?: StringFilter<"School"> | string
    adminMobile?: StringFilter<"School"> | string
    studentStrength?: StringFilter<"School"> | string
    teachingStaff?: StringFilter<"School"> | string
    nonTeachingStaff?: StringFilter<"School"> | string
    totalClasses?: StringFilter<"School"> | string
    mediumOfInstruction?: StringNullableListFilter<"School">
    streamsOffered?: StringNullableListFilter<"School">
    plan?: StringFilter<"School"> | string
    billingCycle?: StringFilter<"School"> | string
    termsAccepted?: BoolFilter<"School"> | boolean
    privacyAccepted?: BoolFilter<"School"> | boolean
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    students?: StudentListRelationFilter
    parents?: ParentListRelationFilter
    feeStructures?: FeeStructureListRelationFilter
    routes?: RouteListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    schoolName?: SortOrder
    schoolType?: SortOrder
    boardAffiliation?: SortOrder
    establishmentYear?: SortOrder
    schoolCode?: SortOrder
    udiseCode?: SortOrderInput | SortOrder
    schoolCategory?: SortOrder
    officialEmail?: SortOrder
    landlineNumber?: SortOrderInput | SortOrder
    mobileNumber?: SortOrder
    alternativeMobile?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    schoolAddress?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pinCode?: SortOrder
    country?: SortOrder
    adminName?: SortOrder
    adminDesignation?: SortOrder
    adminEmail?: SortOrder
    adminPassword?: SortOrder
    confirmPassword?: SortOrder
    adminMobile?: SortOrder
    studentStrength?: SortOrder
    teachingStaff?: SortOrder
    nonTeachingStaff?: SortOrder
    totalClasses?: SortOrder
    mediumOfInstruction?: SortOrder
    streamsOffered?: SortOrder
    plan?: SortOrder
    billingCycle?: SortOrder
    termsAccepted?: SortOrder
    privacyAccepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    students?: StudentOrderByRelationAggregateInput
    parents?: ParentOrderByRelationAggregateInput
    feeStructures?: FeeStructureOrderByRelationAggregateInput
    routes?: RouteOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    schoolCode?: string
    officialEmail?: string
    mobileNumber?: string
    adminEmail?: string
    adminMobile?: string
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    schoolName?: StringFilter<"School"> | string
    schoolType?: StringFilter<"School"> | string
    boardAffiliation?: StringFilter<"School"> | string
    establishmentYear?: StringFilter<"School"> | string
    udiseCode?: StringNullableFilter<"School"> | string | null
    schoolCategory?: StringFilter<"School"> | string
    landlineNumber?: StringNullableFilter<"School"> | string | null
    alternativeMobile?: StringNullableFilter<"School"> | string | null
    website?: StringNullableFilter<"School"> | string | null
    schoolAddress?: StringFilter<"School"> | string
    city?: StringFilter<"School"> | string
    state?: StringFilter<"School"> | string
    pinCode?: StringFilter<"School"> | string
    country?: StringFilter<"School"> | string
    adminName?: StringFilter<"School"> | string
    adminDesignation?: StringFilter<"School"> | string
    adminPassword?: StringFilter<"School"> | string
    confirmPassword?: StringFilter<"School"> | string
    studentStrength?: StringFilter<"School"> | string
    teachingStaff?: StringFilter<"School"> | string
    nonTeachingStaff?: StringFilter<"School"> | string
    totalClasses?: StringFilter<"School"> | string
    mediumOfInstruction?: StringNullableListFilter<"School">
    streamsOffered?: StringNullableListFilter<"School">
    plan?: StringFilter<"School"> | string
    billingCycle?: StringFilter<"School"> | string
    termsAccepted?: BoolFilter<"School"> | boolean
    privacyAccepted?: BoolFilter<"School"> | boolean
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    students?: StudentListRelationFilter
    parents?: ParentListRelationFilter
    feeStructures?: FeeStructureListRelationFilter
    routes?: RouteListRelationFilter
  }, "id" | "schoolCode" | "officialEmail" | "mobileNumber" | "adminEmail" | "adminMobile">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    schoolName?: SortOrder
    schoolType?: SortOrder
    boardAffiliation?: SortOrder
    establishmentYear?: SortOrder
    schoolCode?: SortOrder
    udiseCode?: SortOrderInput | SortOrder
    schoolCategory?: SortOrder
    officialEmail?: SortOrder
    landlineNumber?: SortOrderInput | SortOrder
    mobileNumber?: SortOrder
    alternativeMobile?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    schoolAddress?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pinCode?: SortOrder
    country?: SortOrder
    adminName?: SortOrder
    adminDesignation?: SortOrder
    adminEmail?: SortOrder
    adminPassword?: SortOrder
    confirmPassword?: SortOrder
    adminMobile?: SortOrder
    studentStrength?: SortOrder
    teachingStaff?: SortOrder
    nonTeachingStaff?: SortOrder
    totalClasses?: SortOrder
    mediumOfInstruction?: SortOrder
    streamsOffered?: SortOrder
    plan?: SortOrder
    billingCycle?: SortOrder
    termsAccepted?: SortOrder
    privacyAccepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"School"> | string
    schoolName?: StringWithAggregatesFilter<"School"> | string
    schoolType?: StringWithAggregatesFilter<"School"> | string
    boardAffiliation?: StringWithAggregatesFilter<"School"> | string
    establishmentYear?: StringWithAggregatesFilter<"School"> | string
    schoolCode?: StringWithAggregatesFilter<"School"> | string
    udiseCode?: StringNullableWithAggregatesFilter<"School"> | string | null
    schoolCategory?: StringWithAggregatesFilter<"School"> | string
    officialEmail?: StringWithAggregatesFilter<"School"> | string
    landlineNumber?: StringNullableWithAggregatesFilter<"School"> | string | null
    mobileNumber?: StringWithAggregatesFilter<"School"> | string
    alternativeMobile?: StringNullableWithAggregatesFilter<"School"> | string | null
    website?: StringNullableWithAggregatesFilter<"School"> | string | null
    schoolAddress?: StringWithAggregatesFilter<"School"> | string
    city?: StringWithAggregatesFilter<"School"> | string
    state?: StringWithAggregatesFilter<"School"> | string
    pinCode?: StringWithAggregatesFilter<"School"> | string
    country?: StringWithAggregatesFilter<"School"> | string
    adminName?: StringWithAggregatesFilter<"School"> | string
    adminDesignation?: StringWithAggregatesFilter<"School"> | string
    adminEmail?: StringWithAggregatesFilter<"School"> | string
    adminPassword?: StringWithAggregatesFilter<"School"> | string
    confirmPassword?: StringWithAggregatesFilter<"School"> | string
    adminMobile?: StringWithAggregatesFilter<"School"> | string
    studentStrength?: StringWithAggregatesFilter<"School"> | string
    teachingStaff?: StringWithAggregatesFilter<"School"> | string
    nonTeachingStaff?: StringWithAggregatesFilter<"School"> | string
    totalClasses?: StringWithAggregatesFilter<"School"> | string
    mediumOfInstruction?: StringNullableListFilter<"School">
    streamsOffered?: StringNullableListFilter<"School">
    plan?: StringWithAggregatesFilter<"School"> | string
    billingCycle?: StringWithAggregatesFilter<"School"> | string
    termsAccepted?: BoolWithAggregatesFilter<"School"> | boolean
    privacyAccepted?: BoolWithAggregatesFilter<"School"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
  }

  export type PasswordResetWhereInput = {
    AND?: PasswordResetWhereInput | PasswordResetWhereInput[]
    OR?: PasswordResetWhereInput[]
    NOT?: PasswordResetWhereInput | PasswordResetWhereInput[]
    id?: StringFilter<"PasswordReset"> | string
    adminEmail?: StringFilter<"PasswordReset"> | string
    otpSecret?: StringNullableFilter<"PasswordReset"> | string | null
    hashedOtp?: StringNullableFilter<"PasswordReset"> | string | null
    expiresAt?: DateTimeFilter<"PasswordReset"> | Date | string
    attempts?: IntFilter<"PasswordReset"> | number
    createdAt?: DateTimeFilter<"PasswordReset"> | Date | string
  }

  export type PasswordResetOrderByWithRelationInput = {
    id?: SortOrder
    adminEmail?: SortOrder
    otpSecret?: SortOrderInput | SortOrder
    hashedOtp?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    attempts?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PasswordResetWhereInput | PasswordResetWhereInput[]
    OR?: PasswordResetWhereInput[]
    NOT?: PasswordResetWhereInput | PasswordResetWhereInput[]
    adminEmail?: StringFilter<"PasswordReset"> | string
    otpSecret?: StringNullableFilter<"PasswordReset"> | string | null
    hashedOtp?: StringNullableFilter<"PasswordReset"> | string | null
    expiresAt?: DateTimeFilter<"PasswordReset"> | Date | string
    attempts?: IntFilter<"PasswordReset"> | number
    createdAt?: DateTimeFilter<"PasswordReset"> | Date | string
  }, "id">

  export type PasswordResetOrderByWithAggregationInput = {
    id?: SortOrder
    adminEmail?: SortOrder
    otpSecret?: SortOrderInput | SortOrder
    hashedOtp?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    attempts?: SortOrder
    createdAt?: SortOrder
    _count?: PasswordResetCountOrderByAggregateInput
    _avg?: PasswordResetAvgOrderByAggregateInput
    _max?: PasswordResetMaxOrderByAggregateInput
    _min?: PasswordResetMinOrderByAggregateInput
    _sum?: PasswordResetSumOrderByAggregateInput
  }

  export type PasswordResetScalarWhereWithAggregatesInput = {
    AND?: PasswordResetScalarWhereWithAggregatesInput | PasswordResetScalarWhereWithAggregatesInput[]
    OR?: PasswordResetScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetScalarWhereWithAggregatesInput | PasswordResetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordReset"> | string
    adminEmail?: StringWithAggregatesFilter<"PasswordReset"> | string
    otpSecret?: StringNullableWithAggregatesFilter<"PasswordReset"> | string | null
    hashedOtp?: StringNullableWithAggregatesFilter<"PasswordReset"> | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordReset"> | Date | string
    attempts?: IntWithAggregatesFilter<"PasswordReset"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PasswordReset"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    studentId?: StringFilter<"Student"> | string
    admissionNumber?: StringFilter<"Student"> | string
    qrCodeValue?: StringFilter<"Student"> | string
    firstName?: StringFilter<"Student"> | string
    middleName?: StringNullableFilter<"Student"> | string | null
    lastName?: StringFilter<"Student"> | string
    dateOfBirth?: DateTimeFilter<"Student"> | Date | string
    gender?: StringFilter<"Student"> | string
    bloodGroup?: StringNullableFilter<"Student"> | string | null
    aadharNumber?: StringNullableFilter<"Student"> | string | null
    photoUrl?: StringNullableFilter<"Student"> | string | null
    parentPrimaryMobile?: StringFilter<"Student"> | string
    parentAlternateMobile?: StringNullableFilter<"Student"> | string | null
    parentEmail?: StringNullableFilter<"Student"> | string | null
    emergencyContactName?: StringNullableFilter<"Student"> | string | null
    emergencyContactPhone?: StringNullableFilter<"Student"> | string | null
    addressLine1?: StringFilter<"Student"> | string
    addressLine2?: StringNullableFilter<"Student"> | string | null
    city?: StringFilter<"Student"> | string
    state?: StringFilter<"Student"> | string
    pinCode?: StringFilter<"Student"> | string
    country?: StringFilter<"Student"> | string
    admissionDate?: DateTimeFilter<"Student"> | Date | string
    previousSchoolId?: StringNullableFilter<"Student"> | string | null
    usesTransport?: BoolFilter<"Student"> | boolean
    transportRouteId?: StringNullableFilter<"Student"> | string | null
    pickupPoint?: StringNullableFilter<"Student"> | string | null
    dropPoint?: StringNullableFilter<"Student"> | string | null
    status?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    schoolId?: StringFilter<"Student"> | string
    parentId?: StringFilter<"Student"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
    route?: XOR<RouteNullableScalarRelationFilter, RouteWhereInput> | null
    academicHistory?: StudentAcademicHistoryListRelationFilter
    documents?: DocumentListRelationFilter
    studentFees?: StudentFeeListRelationFilter
    feePayments?: FeePaymentListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    admissionNumber?: SortOrder
    qrCodeValue?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    aadharNumber?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    parentPrimaryMobile?: SortOrder
    parentAlternateMobile?: SortOrderInput | SortOrder
    parentEmail?: SortOrderInput | SortOrder
    emergencyContactName?: SortOrderInput | SortOrder
    emergencyContactPhone?: SortOrderInput | SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    pinCode?: SortOrder
    country?: SortOrder
    admissionDate?: SortOrder
    previousSchoolId?: SortOrderInput | SortOrder
    usesTransport?: SortOrder
    transportRouteId?: SortOrderInput | SortOrder
    pickupPoint?: SortOrderInput | SortOrder
    dropPoint?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
    parentId?: SortOrder
    school?: SchoolOrderByWithRelationInput
    parent?: ParentOrderByWithRelationInput
    route?: RouteOrderByWithRelationInput
    academicHistory?: StudentAcademicHistoryOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
    studentFees?: StudentFeeOrderByRelationAggregateInput
    feePayments?: FeePaymentOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId?: string
    admissionNumber?: string
    qrCodeValue?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    firstName?: StringFilter<"Student"> | string
    middleName?: StringNullableFilter<"Student"> | string | null
    lastName?: StringFilter<"Student"> | string
    dateOfBirth?: DateTimeFilter<"Student"> | Date | string
    gender?: StringFilter<"Student"> | string
    bloodGroup?: StringNullableFilter<"Student"> | string | null
    aadharNumber?: StringNullableFilter<"Student"> | string | null
    photoUrl?: StringNullableFilter<"Student"> | string | null
    parentPrimaryMobile?: StringFilter<"Student"> | string
    parentAlternateMobile?: StringNullableFilter<"Student"> | string | null
    parentEmail?: StringNullableFilter<"Student"> | string | null
    emergencyContactName?: StringNullableFilter<"Student"> | string | null
    emergencyContactPhone?: StringNullableFilter<"Student"> | string | null
    addressLine1?: StringFilter<"Student"> | string
    addressLine2?: StringNullableFilter<"Student"> | string | null
    city?: StringFilter<"Student"> | string
    state?: StringFilter<"Student"> | string
    pinCode?: StringFilter<"Student"> | string
    country?: StringFilter<"Student"> | string
    admissionDate?: DateTimeFilter<"Student"> | Date | string
    previousSchoolId?: StringNullableFilter<"Student"> | string | null
    usesTransport?: BoolFilter<"Student"> | boolean
    transportRouteId?: StringNullableFilter<"Student"> | string | null
    pickupPoint?: StringNullableFilter<"Student"> | string | null
    dropPoint?: StringNullableFilter<"Student"> | string | null
    status?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    schoolId?: StringFilter<"Student"> | string
    parentId?: StringFilter<"Student"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
    route?: XOR<RouteNullableScalarRelationFilter, RouteWhereInput> | null
    academicHistory?: StudentAcademicHistoryListRelationFilter
    documents?: DocumentListRelationFilter
    studentFees?: StudentFeeListRelationFilter
    feePayments?: FeePaymentListRelationFilter
  }, "id" | "studentId" | "admissionNumber" | "qrCodeValue">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    admissionNumber?: SortOrder
    qrCodeValue?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    aadharNumber?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    parentPrimaryMobile?: SortOrder
    parentAlternateMobile?: SortOrderInput | SortOrder
    parentEmail?: SortOrderInput | SortOrder
    emergencyContactName?: SortOrderInput | SortOrder
    emergencyContactPhone?: SortOrderInput | SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    pinCode?: SortOrder
    country?: SortOrder
    admissionDate?: SortOrder
    previousSchoolId?: SortOrderInput | SortOrder
    usesTransport?: SortOrder
    transportRouteId?: SortOrderInput | SortOrder
    pickupPoint?: SortOrderInput | SortOrder
    dropPoint?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
    parentId?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    studentId?: StringWithAggregatesFilter<"Student"> | string
    admissionNumber?: StringWithAggregatesFilter<"Student"> | string
    qrCodeValue?: StringWithAggregatesFilter<"Student"> | string
    firstName?: StringWithAggregatesFilter<"Student"> | string
    middleName?: StringNullableWithAggregatesFilter<"Student"> | string | null
    lastName?: StringWithAggregatesFilter<"Student"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    gender?: StringWithAggregatesFilter<"Student"> | string
    bloodGroup?: StringNullableWithAggregatesFilter<"Student"> | string | null
    aadharNumber?: StringNullableWithAggregatesFilter<"Student"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"Student"> | string | null
    parentPrimaryMobile?: StringWithAggregatesFilter<"Student"> | string
    parentAlternateMobile?: StringNullableWithAggregatesFilter<"Student"> | string | null
    parentEmail?: StringNullableWithAggregatesFilter<"Student"> | string | null
    emergencyContactName?: StringNullableWithAggregatesFilter<"Student"> | string | null
    emergencyContactPhone?: StringNullableWithAggregatesFilter<"Student"> | string | null
    addressLine1?: StringWithAggregatesFilter<"Student"> | string
    addressLine2?: StringNullableWithAggregatesFilter<"Student"> | string | null
    city?: StringWithAggregatesFilter<"Student"> | string
    state?: StringWithAggregatesFilter<"Student"> | string
    pinCode?: StringWithAggregatesFilter<"Student"> | string
    country?: StringWithAggregatesFilter<"Student"> | string
    admissionDate?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    previousSchoolId?: StringNullableWithAggregatesFilter<"Student"> | string | null
    usesTransport?: BoolWithAggregatesFilter<"Student"> | boolean
    transportRouteId?: StringNullableWithAggregatesFilter<"Student"> | string | null
    pickupPoint?: StringNullableWithAggregatesFilter<"Student"> | string | null
    dropPoint?: StringNullableWithAggregatesFilter<"Student"> | string | null
    status?: StringWithAggregatesFilter<"Student"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    schoolId?: StringWithAggregatesFilter<"Student"> | string
    parentId?: StringWithAggregatesFilter<"Student"> | string
  }

  export type StudentAcademicHistoryWhereInput = {
    AND?: StudentAcademicHistoryWhereInput | StudentAcademicHistoryWhereInput[]
    OR?: StudentAcademicHistoryWhereInput[]
    NOT?: StudentAcademicHistoryWhereInput | StudentAcademicHistoryWhereInput[]
    id?: StringFilter<"StudentAcademicHistory"> | string
    academicYear?: StringFilter<"StudentAcademicHistory"> | string
    class?: StringFilter<"StudentAcademicHistory"> | string
    section?: StringFilter<"StudentAcademicHistory"> | string
    rollNumber?: IntFilter<"StudentAcademicHistory"> | number
    classTeacher?: StringNullableFilter<"StudentAcademicHistory"> | string | null
    promotionStatus?: StringFilter<"StudentAcademicHistory"> | string
    attendancePresent?: IntFilter<"StudentAcademicHistory"> | number
    attendanceAbsent?: IntFilter<"StudentAcademicHistory"> | number
    finalGrade?: StringNullableFilter<"StudentAcademicHistory"> | string | null
    remarks?: StringNullableFilter<"StudentAcademicHistory"> | string | null
    createdAt?: DateTimeFilter<"StudentAcademicHistory"> | Date | string
    updatedAt?: DateTimeFilter<"StudentAcademicHistory"> | Date | string
    studentId?: StringFilter<"StudentAcademicHistory"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type StudentAcademicHistoryOrderByWithRelationInput = {
    id?: SortOrder
    academicYear?: SortOrder
    class?: SortOrder
    section?: SortOrder
    rollNumber?: SortOrder
    classTeacher?: SortOrderInput | SortOrder
    promotionStatus?: SortOrder
    attendancePresent?: SortOrder
    attendanceAbsent?: SortOrder
    finalGrade?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentId?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type StudentAcademicHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_academicYear?: StudentAcademicHistoryStudentIdAcademicYearCompoundUniqueInput
    AND?: StudentAcademicHistoryWhereInput | StudentAcademicHistoryWhereInput[]
    OR?: StudentAcademicHistoryWhereInput[]
    NOT?: StudentAcademicHistoryWhereInput | StudentAcademicHistoryWhereInput[]
    academicYear?: StringFilter<"StudentAcademicHistory"> | string
    class?: StringFilter<"StudentAcademicHistory"> | string
    section?: StringFilter<"StudentAcademicHistory"> | string
    rollNumber?: IntFilter<"StudentAcademicHistory"> | number
    classTeacher?: StringNullableFilter<"StudentAcademicHistory"> | string | null
    promotionStatus?: StringFilter<"StudentAcademicHistory"> | string
    attendancePresent?: IntFilter<"StudentAcademicHistory"> | number
    attendanceAbsent?: IntFilter<"StudentAcademicHistory"> | number
    finalGrade?: StringNullableFilter<"StudentAcademicHistory"> | string | null
    remarks?: StringNullableFilter<"StudentAcademicHistory"> | string | null
    createdAt?: DateTimeFilter<"StudentAcademicHistory"> | Date | string
    updatedAt?: DateTimeFilter<"StudentAcademicHistory"> | Date | string
    studentId?: StringFilter<"StudentAcademicHistory"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id" | "studentId_academicYear">

  export type StudentAcademicHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    academicYear?: SortOrder
    class?: SortOrder
    section?: SortOrder
    rollNumber?: SortOrder
    classTeacher?: SortOrderInput | SortOrder
    promotionStatus?: SortOrder
    attendancePresent?: SortOrder
    attendanceAbsent?: SortOrder
    finalGrade?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentId?: SortOrder
    _count?: StudentAcademicHistoryCountOrderByAggregateInput
    _avg?: StudentAcademicHistoryAvgOrderByAggregateInput
    _max?: StudentAcademicHistoryMaxOrderByAggregateInput
    _min?: StudentAcademicHistoryMinOrderByAggregateInput
    _sum?: StudentAcademicHistorySumOrderByAggregateInput
  }

  export type StudentAcademicHistoryScalarWhereWithAggregatesInput = {
    AND?: StudentAcademicHistoryScalarWhereWithAggregatesInput | StudentAcademicHistoryScalarWhereWithAggregatesInput[]
    OR?: StudentAcademicHistoryScalarWhereWithAggregatesInput[]
    NOT?: StudentAcademicHistoryScalarWhereWithAggregatesInput | StudentAcademicHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentAcademicHistory"> | string
    academicYear?: StringWithAggregatesFilter<"StudentAcademicHistory"> | string
    class?: StringWithAggregatesFilter<"StudentAcademicHistory"> | string
    section?: StringWithAggregatesFilter<"StudentAcademicHistory"> | string
    rollNumber?: IntWithAggregatesFilter<"StudentAcademicHistory"> | number
    classTeacher?: StringNullableWithAggregatesFilter<"StudentAcademicHistory"> | string | null
    promotionStatus?: StringWithAggregatesFilter<"StudentAcademicHistory"> | string
    attendancePresent?: IntWithAggregatesFilter<"StudentAcademicHistory"> | number
    attendanceAbsent?: IntWithAggregatesFilter<"StudentAcademicHistory"> | number
    finalGrade?: StringNullableWithAggregatesFilter<"StudentAcademicHistory"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"StudentAcademicHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StudentAcademicHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentAcademicHistory"> | Date | string
    studentId?: StringWithAggregatesFilter<"StudentAcademicHistory"> | string
  }

  export type ParentWhereInput = {
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    id?: StringFilter<"Parent"> | string
    fatherName?: StringFilter<"Parent"> | string
    fatherOccupation?: StringNullableFilter<"Parent"> | string | null
    fatherMobile?: StringFilter<"Parent"> | string
    fatherEmail?: StringNullableFilter<"Parent"> | string | null
    fatherAadhar?: StringNullableFilter<"Parent"> | string | null
    motherName?: StringFilter<"Parent"> | string
    motherOccupation?: StringNullableFilter<"Parent"> | string | null
    motherMobile?: StringFilter<"Parent"> | string
    motherEmail?: StringNullableFilter<"Parent"> | string | null
    motherAadhar?: StringNullableFilter<"Parent"> | string | null
    guardianName?: StringNullableFilter<"Parent"> | string | null
    guardianRelation?: StringNullableFilter<"Parent"> | string | null
    guardianMobile?: StringNullableFilter<"Parent"> | string | null
    guardianEmail?: StringNullableFilter<"Parent"> | string | null
    primaryContact?: StringFilter<"Parent"> | string
    addressLine1?: StringFilter<"Parent"> | string
    addressLine2?: StringNullableFilter<"Parent"> | string | null
    city?: StringFilter<"Parent"> | string
    state?: StringFilter<"Parent"> | string
    pinCode?: StringFilter<"Parent"> | string
    country?: StringFilter<"Parent"> | string
    createdAt?: DateTimeFilter<"Parent"> | Date | string
    updatedAt?: DateTimeFilter<"Parent"> | Date | string
    schoolId?: StringFilter<"Parent"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    students?: StudentListRelationFilter
  }

  export type ParentOrderByWithRelationInput = {
    id?: SortOrder
    fatherName?: SortOrder
    fatherOccupation?: SortOrderInput | SortOrder
    fatherMobile?: SortOrder
    fatherEmail?: SortOrderInput | SortOrder
    fatherAadhar?: SortOrderInput | SortOrder
    motherName?: SortOrder
    motherOccupation?: SortOrderInput | SortOrder
    motherMobile?: SortOrder
    motherEmail?: SortOrderInput | SortOrder
    motherAadhar?: SortOrderInput | SortOrder
    guardianName?: SortOrderInput | SortOrder
    guardianRelation?: SortOrderInput | SortOrder
    guardianMobile?: SortOrderInput | SortOrder
    guardianEmail?: SortOrderInput | SortOrder
    primaryContact?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    pinCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
    school?: SchoolOrderByWithRelationInput
    students?: StudentOrderByRelationAggregateInput
  }

  export type ParentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    fatherName?: StringFilter<"Parent"> | string
    fatherOccupation?: StringNullableFilter<"Parent"> | string | null
    fatherMobile?: StringFilter<"Parent"> | string
    fatherEmail?: StringNullableFilter<"Parent"> | string | null
    fatherAadhar?: StringNullableFilter<"Parent"> | string | null
    motherName?: StringFilter<"Parent"> | string
    motherOccupation?: StringNullableFilter<"Parent"> | string | null
    motherMobile?: StringFilter<"Parent"> | string
    motherEmail?: StringNullableFilter<"Parent"> | string | null
    motherAadhar?: StringNullableFilter<"Parent"> | string | null
    guardianName?: StringNullableFilter<"Parent"> | string | null
    guardianRelation?: StringNullableFilter<"Parent"> | string | null
    guardianMobile?: StringNullableFilter<"Parent"> | string | null
    guardianEmail?: StringNullableFilter<"Parent"> | string | null
    primaryContact?: StringFilter<"Parent"> | string
    addressLine1?: StringFilter<"Parent"> | string
    addressLine2?: StringNullableFilter<"Parent"> | string | null
    city?: StringFilter<"Parent"> | string
    state?: StringFilter<"Parent"> | string
    pinCode?: StringFilter<"Parent"> | string
    country?: StringFilter<"Parent"> | string
    createdAt?: DateTimeFilter<"Parent"> | Date | string
    updatedAt?: DateTimeFilter<"Parent"> | Date | string
    schoolId?: StringFilter<"Parent"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    students?: StudentListRelationFilter
  }, "id">

  export type ParentOrderByWithAggregationInput = {
    id?: SortOrder
    fatherName?: SortOrder
    fatherOccupation?: SortOrderInput | SortOrder
    fatherMobile?: SortOrder
    fatherEmail?: SortOrderInput | SortOrder
    fatherAadhar?: SortOrderInput | SortOrder
    motherName?: SortOrder
    motherOccupation?: SortOrderInput | SortOrder
    motherMobile?: SortOrder
    motherEmail?: SortOrderInput | SortOrder
    motherAadhar?: SortOrderInput | SortOrder
    guardianName?: SortOrderInput | SortOrder
    guardianRelation?: SortOrderInput | SortOrder
    guardianMobile?: SortOrderInput | SortOrder
    guardianEmail?: SortOrderInput | SortOrder
    primaryContact?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    pinCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
    _count?: ParentCountOrderByAggregateInput
    _max?: ParentMaxOrderByAggregateInput
    _min?: ParentMinOrderByAggregateInput
  }

  export type ParentScalarWhereWithAggregatesInput = {
    AND?: ParentScalarWhereWithAggregatesInput | ParentScalarWhereWithAggregatesInput[]
    OR?: ParentScalarWhereWithAggregatesInput[]
    NOT?: ParentScalarWhereWithAggregatesInput | ParentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Parent"> | string
    fatherName?: StringWithAggregatesFilter<"Parent"> | string
    fatherOccupation?: StringNullableWithAggregatesFilter<"Parent"> | string | null
    fatherMobile?: StringWithAggregatesFilter<"Parent"> | string
    fatherEmail?: StringNullableWithAggregatesFilter<"Parent"> | string | null
    fatherAadhar?: StringNullableWithAggregatesFilter<"Parent"> | string | null
    motherName?: StringWithAggregatesFilter<"Parent"> | string
    motherOccupation?: StringNullableWithAggregatesFilter<"Parent"> | string | null
    motherMobile?: StringWithAggregatesFilter<"Parent"> | string
    motherEmail?: StringNullableWithAggregatesFilter<"Parent"> | string | null
    motherAadhar?: StringNullableWithAggregatesFilter<"Parent"> | string | null
    guardianName?: StringNullableWithAggregatesFilter<"Parent"> | string | null
    guardianRelation?: StringNullableWithAggregatesFilter<"Parent"> | string | null
    guardianMobile?: StringNullableWithAggregatesFilter<"Parent"> | string | null
    guardianEmail?: StringNullableWithAggregatesFilter<"Parent"> | string | null
    primaryContact?: StringWithAggregatesFilter<"Parent"> | string
    addressLine1?: StringWithAggregatesFilter<"Parent"> | string
    addressLine2?: StringNullableWithAggregatesFilter<"Parent"> | string | null
    city?: StringWithAggregatesFilter<"Parent"> | string
    state?: StringWithAggregatesFilter<"Parent"> | string
    pinCode?: StringWithAggregatesFilter<"Parent"> | string
    country?: StringWithAggregatesFilter<"Parent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Parent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Parent"> | Date | string
    schoolId?: StringWithAggregatesFilter<"Parent"> | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    documentType?: StringFilter<"Document"> | string
    documentUrl?: StringFilter<"Document"> | string
    fileName?: StringFilter<"Document"> | string
    fileSize?: IntFilter<"Document"> | number
    mimeType?: StringFilter<"Document"> | string
    verificationStatus?: StringFilter<"Document"> | string
    verifiedBy?: StringNullableFilter<"Document"> | string | null
    verifiedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    rejectionReason?: StringNullableFilter<"Document"> | string | null
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    studentId?: StringFilter<"Document"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    documentType?: SortOrder
    documentUrl?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    verificationStatus?: SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
    studentId?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    documentType?: StringFilter<"Document"> | string
    documentUrl?: StringFilter<"Document"> | string
    fileName?: StringFilter<"Document"> | string
    fileSize?: IntFilter<"Document"> | number
    mimeType?: StringFilter<"Document"> | string
    verificationStatus?: StringFilter<"Document"> | string
    verifiedBy?: StringNullableFilter<"Document"> | string | null
    verifiedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    rejectionReason?: StringNullableFilter<"Document"> | string | null
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    studentId?: StringFilter<"Document"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    documentType?: SortOrder
    documentUrl?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    verificationStatus?: SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
    studentId?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    documentType?: StringWithAggregatesFilter<"Document"> | string
    documentUrl?: StringWithAggregatesFilter<"Document"> | string
    fileName?: StringWithAggregatesFilter<"Document"> | string
    fileSize?: IntWithAggregatesFilter<"Document"> | number
    mimeType?: StringWithAggregatesFilter<"Document"> | string
    verificationStatus?: StringWithAggregatesFilter<"Document"> | string
    verifiedBy?: StringNullableWithAggregatesFilter<"Document"> | string | null
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"Document"> | Date | string | null
    rejectionReason?: StringNullableWithAggregatesFilter<"Document"> | string | null
    uploadedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    studentId?: StringWithAggregatesFilter<"Document"> | string
  }

  export type FeeStructureWhereInput = {
    AND?: FeeStructureWhereInput | FeeStructureWhereInput[]
    OR?: FeeStructureWhereInput[]
    NOT?: FeeStructureWhereInput | FeeStructureWhereInput[]
    id?: StringFilter<"FeeStructure"> | string
    class?: StringFilter<"FeeStructure"> | string
    academicYear?: StringFilter<"FeeStructure"> | string
    tuitionFeeMonthly?: IntFilter<"FeeStructure"> | number
    transportFeeMonthly?: IntFilter<"FeeStructure"> | number
    examFeeYearly?: IntFilter<"FeeStructure"> | number
    admissionFee?: IntFilter<"FeeStructure"> | number
    booksFee?: IntFilter<"FeeStructure"> | number
    idCardFee?: IntFilter<"FeeStructure"> | number
    activityFee?: IntFilter<"FeeStructure"> | number
    createdAt?: DateTimeFilter<"FeeStructure"> | Date | string
    updatedAt?: DateTimeFilter<"FeeStructure"> | Date | string
    schoolId?: StringFilter<"FeeStructure"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type FeeStructureOrderByWithRelationInput = {
    id?: SortOrder
    class?: SortOrder
    academicYear?: SortOrder
    tuitionFeeMonthly?: SortOrder
    transportFeeMonthly?: SortOrder
    examFeeYearly?: SortOrder
    admissionFee?: SortOrder
    booksFee?: SortOrder
    idCardFee?: SortOrder
    activityFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
    school?: SchoolOrderByWithRelationInput
  }

  export type FeeStructureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    schoolId_class_academicYear?: FeeStructureSchoolIdClassAcademicYearCompoundUniqueInput
    AND?: FeeStructureWhereInput | FeeStructureWhereInput[]
    OR?: FeeStructureWhereInput[]
    NOT?: FeeStructureWhereInput | FeeStructureWhereInput[]
    class?: StringFilter<"FeeStructure"> | string
    academicYear?: StringFilter<"FeeStructure"> | string
    tuitionFeeMonthly?: IntFilter<"FeeStructure"> | number
    transportFeeMonthly?: IntFilter<"FeeStructure"> | number
    examFeeYearly?: IntFilter<"FeeStructure"> | number
    admissionFee?: IntFilter<"FeeStructure"> | number
    booksFee?: IntFilter<"FeeStructure"> | number
    idCardFee?: IntFilter<"FeeStructure"> | number
    activityFee?: IntFilter<"FeeStructure"> | number
    createdAt?: DateTimeFilter<"FeeStructure"> | Date | string
    updatedAt?: DateTimeFilter<"FeeStructure"> | Date | string
    schoolId?: StringFilter<"FeeStructure"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id" | "schoolId_class_academicYear">

  export type FeeStructureOrderByWithAggregationInput = {
    id?: SortOrder
    class?: SortOrder
    academicYear?: SortOrder
    tuitionFeeMonthly?: SortOrder
    transportFeeMonthly?: SortOrder
    examFeeYearly?: SortOrder
    admissionFee?: SortOrder
    booksFee?: SortOrder
    idCardFee?: SortOrder
    activityFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
    _count?: FeeStructureCountOrderByAggregateInput
    _avg?: FeeStructureAvgOrderByAggregateInput
    _max?: FeeStructureMaxOrderByAggregateInput
    _min?: FeeStructureMinOrderByAggregateInput
    _sum?: FeeStructureSumOrderByAggregateInput
  }

  export type FeeStructureScalarWhereWithAggregatesInput = {
    AND?: FeeStructureScalarWhereWithAggregatesInput | FeeStructureScalarWhereWithAggregatesInput[]
    OR?: FeeStructureScalarWhereWithAggregatesInput[]
    NOT?: FeeStructureScalarWhereWithAggregatesInput | FeeStructureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeeStructure"> | string
    class?: StringWithAggregatesFilter<"FeeStructure"> | string
    academicYear?: StringWithAggregatesFilter<"FeeStructure"> | string
    tuitionFeeMonthly?: IntWithAggregatesFilter<"FeeStructure"> | number
    transportFeeMonthly?: IntWithAggregatesFilter<"FeeStructure"> | number
    examFeeYearly?: IntWithAggregatesFilter<"FeeStructure"> | number
    admissionFee?: IntWithAggregatesFilter<"FeeStructure"> | number
    booksFee?: IntWithAggregatesFilter<"FeeStructure"> | number
    idCardFee?: IntWithAggregatesFilter<"FeeStructure"> | number
    activityFee?: IntWithAggregatesFilter<"FeeStructure"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FeeStructure"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FeeStructure"> | Date | string
    schoolId?: StringWithAggregatesFilter<"FeeStructure"> | string
  }

  export type StudentFeeWhereInput = {
    AND?: StudentFeeWhereInput | StudentFeeWhereInput[]
    OR?: StudentFeeWhereInput[]
    NOT?: StudentFeeWhereInput | StudentFeeWhereInput[]
    id?: StringFilter<"StudentFee"> | string
    academicYear?: StringFilter<"StudentFee"> | string
    tuitionFee?: IntFilter<"StudentFee"> | number
    transportFee?: IntFilter<"StudentFee"> | number
    examFee?: IntFilter<"StudentFee"> | number
    admissionFee?: IntFilter<"StudentFee"> | number
    otherFees?: IntFilter<"StudentFee"> | number
    discountPercentage?: IntFilter<"StudentFee"> | number
    discountAmount?: IntFilter<"StudentFee"> | number
    specialCharges?: IntFilter<"StudentFee"> | number
    totalFee?: IntFilter<"StudentFee"> | number
    totalPayable?: IntFilter<"StudentFee"> | number
    totalPaid?: IntFilter<"StudentFee"> | number
    totalPending?: IntFilter<"StudentFee"> | number
    createdAt?: DateTimeFilter<"StudentFee"> | Date | string
    updatedAt?: DateTimeFilter<"StudentFee"> | Date | string
    studentId?: StringFilter<"StudentFee"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    installments?: FeeInstallmentListRelationFilter
  }

  export type StudentFeeOrderByWithRelationInput = {
    id?: SortOrder
    academicYear?: SortOrder
    tuitionFee?: SortOrder
    transportFee?: SortOrder
    examFee?: SortOrder
    admissionFee?: SortOrder
    otherFees?: SortOrder
    discountPercentage?: SortOrder
    discountAmount?: SortOrder
    specialCharges?: SortOrder
    totalFee?: SortOrder
    totalPayable?: SortOrder
    totalPaid?: SortOrder
    totalPending?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentId?: SortOrder
    student?: StudentOrderByWithRelationInput
    installments?: FeeInstallmentOrderByRelationAggregateInput
  }

  export type StudentFeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_academicYear?: StudentFeeStudentIdAcademicYearCompoundUniqueInput
    AND?: StudentFeeWhereInput | StudentFeeWhereInput[]
    OR?: StudentFeeWhereInput[]
    NOT?: StudentFeeWhereInput | StudentFeeWhereInput[]
    academicYear?: StringFilter<"StudentFee"> | string
    tuitionFee?: IntFilter<"StudentFee"> | number
    transportFee?: IntFilter<"StudentFee"> | number
    examFee?: IntFilter<"StudentFee"> | number
    admissionFee?: IntFilter<"StudentFee"> | number
    otherFees?: IntFilter<"StudentFee"> | number
    discountPercentage?: IntFilter<"StudentFee"> | number
    discountAmount?: IntFilter<"StudentFee"> | number
    specialCharges?: IntFilter<"StudentFee"> | number
    totalFee?: IntFilter<"StudentFee"> | number
    totalPayable?: IntFilter<"StudentFee"> | number
    totalPaid?: IntFilter<"StudentFee"> | number
    totalPending?: IntFilter<"StudentFee"> | number
    createdAt?: DateTimeFilter<"StudentFee"> | Date | string
    updatedAt?: DateTimeFilter<"StudentFee"> | Date | string
    studentId?: StringFilter<"StudentFee"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    installments?: FeeInstallmentListRelationFilter
  }, "id" | "studentId_academicYear">

  export type StudentFeeOrderByWithAggregationInput = {
    id?: SortOrder
    academicYear?: SortOrder
    tuitionFee?: SortOrder
    transportFee?: SortOrder
    examFee?: SortOrder
    admissionFee?: SortOrder
    otherFees?: SortOrder
    discountPercentage?: SortOrder
    discountAmount?: SortOrder
    specialCharges?: SortOrder
    totalFee?: SortOrder
    totalPayable?: SortOrder
    totalPaid?: SortOrder
    totalPending?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentId?: SortOrder
    _count?: StudentFeeCountOrderByAggregateInput
    _avg?: StudentFeeAvgOrderByAggregateInput
    _max?: StudentFeeMaxOrderByAggregateInput
    _min?: StudentFeeMinOrderByAggregateInput
    _sum?: StudentFeeSumOrderByAggregateInput
  }

  export type StudentFeeScalarWhereWithAggregatesInput = {
    AND?: StudentFeeScalarWhereWithAggregatesInput | StudentFeeScalarWhereWithAggregatesInput[]
    OR?: StudentFeeScalarWhereWithAggregatesInput[]
    NOT?: StudentFeeScalarWhereWithAggregatesInput | StudentFeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentFee"> | string
    academicYear?: StringWithAggregatesFilter<"StudentFee"> | string
    tuitionFee?: IntWithAggregatesFilter<"StudentFee"> | number
    transportFee?: IntWithAggregatesFilter<"StudentFee"> | number
    examFee?: IntWithAggregatesFilter<"StudentFee"> | number
    admissionFee?: IntWithAggregatesFilter<"StudentFee"> | number
    otherFees?: IntWithAggregatesFilter<"StudentFee"> | number
    discountPercentage?: IntWithAggregatesFilter<"StudentFee"> | number
    discountAmount?: IntWithAggregatesFilter<"StudentFee"> | number
    specialCharges?: IntWithAggregatesFilter<"StudentFee"> | number
    totalFee?: IntWithAggregatesFilter<"StudentFee"> | number
    totalPayable?: IntWithAggregatesFilter<"StudentFee"> | number
    totalPaid?: IntWithAggregatesFilter<"StudentFee"> | number
    totalPending?: IntWithAggregatesFilter<"StudentFee"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StudentFee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentFee"> | Date | string
    studentId?: StringWithAggregatesFilter<"StudentFee"> | string
  }

  export type FeeInstallmentWhereInput = {
    AND?: FeeInstallmentWhereInput | FeeInstallmentWhereInput[]
    OR?: FeeInstallmentWhereInput[]
    NOT?: FeeInstallmentWhereInput | FeeInstallmentWhereInput[]
    id?: StringFilter<"FeeInstallment"> | string
    installmentNumber?: IntFilter<"FeeInstallment"> | number
    month?: StringFilter<"FeeInstallment"> | string
    dueDate?: DateTimeFilter<"FeeInstallment"> | Date | string
    amountDue?: IntFilter<"FeeInstallment"> | number
    amountPaid?: IntFilter<"FeeInstallment"> | number
    lateFee?: IntFilter<"FeeInstallment"> | number
    status?: StringFilter<"FeeInstallment"> | string
    createdAt?: DateTimeFilter<"FeeInstallment"> | Date | string
    updatedAt?: DateTimeFilter<"FeeInstallment"> | Date | string
    studentFeeId?: StringFilter<"FeeInstallment"> | string
    studentFee?: XOR<StudentFeeScalarRelationFilter, StudentFeeWhereInput>
    payments?: FeePaymentListRelationFilter
  }

  export type FeeInstallmentOrderByWithRelationInput = {
    id?: SortOrder
    installmentNumber?: SortOrder
    month?: SortOrder
    dueDate?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    lateFee?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentFeeId?: SortOrder
    studentFee?: StudentFeeOrderByWithRelationInput
    payments?: FeePaymentOrderByRelationAggregateInput
  }

  export type FeeInstallmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeeInstallmentWhereInput | FeeInstallmentWhereInput[]
    OR?: FeeInstallmentWhereInput[]
    NOT?: FeeInstallmentWhereInput | FeeInstallmentWhereInput[]
    installmentNumber?: IntFilter<"FeeInstallment"> | number
    month?: StringFilter<"FeeInstallment"> | string
    dueDate?: DateTimeFilter<"FeeInstallment"> | Date | string
    amountDue?: IntFilter<"FeeInstallment"> | number
    amountPaid?: IntFilter<"FeeInstallment"> | number
    lateFee?: IntFilter<"FeeInstallment"> | number
    status?: StringFilter<"FeeInstallment"> | string
    createdAt?: DateTimeFilter<"FeeInstallment"> | Date | string
    updatedAt?: DateTimeFilter<"FeeInstallment"> | Date | string
    studentFeeId?: StringFilter<"FeeInstallment"> | string
    studentFee?: XOR<StudentFeeScalarRelationFilter, StudentFeeWhereInput>
    payments?: FeePaymentListRelationFilter
  }, "id">

  export type FeeInstallmentOrderByWithAggregationInput = {
    id?: SortOrder
    installmentNumber?: SortOrder
    month?: SortOrder
    dueDate?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    lateFee?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentFeeId?: SortOrder
    _count?: FeeInstallmentCountOrderByAggregateInput
    _avg?: FeeInstallmentAvgOrderByAggregateInput
    _max?: FeeInstallmentMaxOrderByAggregateInput
    _min?: FeeInstallmentMinOrderByAggregateInput
    _sum?: FeeInstallmentSumOrderByAggregateInput
  }

  export type FeeInstallmentScalarWhereWithAggregatesInput = {
    AND?: FeeInstallmentScalarWhereWithAggregatesInput | FeeInstallmentScalarWhereWithAggregatesInput[]
    OR?: FeeInstallmentScalarWhereWithAggregatesInput[]
    NOT?: FeeInstallmentScalarWhereWithAggregatesInput | FeeInstallmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeeInstallment"> | string
    installmentNumber?: IntWithAggregatesFilter<"FeeInstallment"> | number
    month?: StringWithAggregatesFilter<"FeeInstallment"> | string
    dueDate?: DateTimeWithAggregatesFilter<"FeeInstallment"> | Date | string
    amountDue?: IntWithAggregatesFilter<"FeeInstallment"> | number
    amountPaid?: IntWithAggregatesFilter<"FeeInstallment"> | number
    lateFee?: IntWithAggregatesFilter<"FeeInstallment"> | number
    status?: StringWithAggregatesFilter<"FeeInstallment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FeeInstallment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FeeInstallment"> | Date | string
    studentFeeId?: StringWithAggregatesFilter<"FeeInstallment"> | string
  }

  export type FeePaymentWhereInput = {
    AND?: FeePaymentWhereInput | FeePaymentWhereInput[]
    OR?: FeePaymentWhereInput[]
    NOT?: FeePaymentWhereInput | FeePaymentWhereInput[]
    id?: StringFilter<"FeePayment"> | string
    amountPaid?: IntFilter<"FeePayment"> | number
    paymentDate?: DateTimeFilter<"FeePayment"> | Date | string
    paymentMethod?: StringFilter<"FeePayment"> | string
    transactionId?: StringNullableFilter<"FeePayment"> | string | null
    receiptNumber?: StringFilter<"FeePayment"> | string
    paymentFor?: StringFilter<"FeePayment"> | string
    remarks?: StringNullableFilter<"FeePayment"> | string | null
    paidBy?: StringNullableFilter<"FeePayment"> | string | null
    createdAt?: DateTimeFilter<"FeePayment"> | Date | string
    studentId?: StringFilter<"FeePayment"> | string
    installmentId?: StringNullableFilter<"FeePayment"> | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    installment?: XOR<FeeInstallmentNullableScalarRelationFilter, FeeInstallmentWhereInput> | null
  }

  export type FeePaymentOrderByWithRelationInput = {
    id?: SortOrder
    amountPaid?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    receiptNumber?: SortOrder
    paymentFor?: SortOrder
    remarks?: SortOrderInput | SortOrder
    paidBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    studentId?: SortOrder
    installmentId?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
    installment?: FeeInstallmentOrderByWithRelationInput
  }

  export type FeePaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    receiptNumber?: string
    AND?: FeePaymentWhereInput | FeePaymentWhereInput[]
    OR?: FeePaymentWhereInput[]
    NOT?: FeePaymentWhereInput | FeePaymentWhereInput[]
    amountPaid?: IntFilter<"FeePayment"> | number
    paymentDate?: DateTimeFilter<"FeePayment"> | Date | string
    paymentMethod?: StringFilter<"FeePayment"> | string
    transactionId?: StringNullableFilter<"FeePayment"> | string | null
    paymentFor?: StringFilter<"FeePayment"> | string
    remarks?: StringNullableFilter<"FeePayment"> | string | null
    paidBy?: StringNullableFilter<"FeePayment"> | string | null
    createdAt?: DateTimeFilter<"FeePayment"> | Date | string
    studentId?: StringFilter<"FeePayment"> | string
    installmentId?: StringNullableFilter<"FeePayment"> | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    installment?: XOR<FeeInstallmentNullableScalarRelationFilter, FeeInstallmentWhereInput> | null
  }, "id" | "receiptNumber">

  export type FeePaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amountPaid?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    receiptNumber?: SortOrder
    paymentFor?: SortOrder
    remarks?: SortOrderInput | SortOrder
    paidBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    studentId?: SortOrder
    installmentId?: SortOrderInput | SortOrder
    _count?: FeePaymentCountOrderByAggregateInput
    _avg?: FeePaymentAvgOrderByAggregateInput
    _max?: FeePaymentMaxOrderByAggregateInput
    _min?: FeePaymentMinOrderByAggregateInput
    _sum?: FeePaymentSumOrderByAggregateInput
  }

  export type FeePaymentScalarWhereWithAggregatesInput = {
    AND?: FeePaymentScalarWhereWithAggregatesInput | FeePaymentScalarWhereWithAggregatesInput[]
    OR?: FeePaymentScalarWhereWithAggregatesInput[]
    NOT?: FeePaymentScalarWhereWithAggregatesInput | FeePaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeePayment"> | string
    amountPaid?: IntWithAggregatesFilter<"FeePayment"> | number
    paymentDate?: DateTimeWithAggregatesFilter<"FeePayment"> | Date | string
    paymentMethod?: StringWithAggregatesFilter<"FeePayment"> | string
    transactionId?: StringNullableWithAggregatesFilter<"FeePayment"> | string | null
    receiptNumber?: StringWithAggregatesFilter<"FeePayment"> | string
    paymentFor?: StringWithAggregatesFilter<"FeePayment"> | string
    remarks?: StringNullableWithAggregatesFilter<"FeePayment"> | string | null
    paidBy?: StringNullableWithAggregatesFilter<"FeePayment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FeePayment"> | Date | string
    studentId?: StringWithAggregatesFilter<"FeePayment"> | string
    installmentId?: StringNullableWithAggregatesFilter<"FeePayment"> | string | null
  }

  export type RouteWhereInput = {
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    id?: StringFilter<"Route"> | string
    routeName?: StringFilter<"Route"> | string
    stops?: StringNullableListFilter<"Route">
    vehicleNumber?: StringFilter<"Route"> | string
    driverName?: StringFilter<"Route"> | string
    driverMobile?: StringFilter<"Route"> | string
    capacity?: IntFilter<"Route"> | number
    isActive?: BoolFilter<"Route"> | boolean
    createdAt?: DateTimeFilter<"Route"> | Date | string
    updatedAt?: DateTimeFilter<"Route"> | Date | string
    schoolId?: StringFilter<"Route"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    students?: StudentListRelationFilter
  }

  export type RouteOrderByWithRelationInput = {
    id?: SortOrder
    routeName?: SortOrder
    stops?: SortOrder
    vehicleNumber?: SortOrder
    driverName?: SortOrder
    driverMobile?: SortOrder
    capacity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
    school?: SchoolOrderByWithRelationInput
    students?: StudentOrderByRelationAggregateInput
  }

  export type RouteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    routeName?: StringFilter<"Route"> | string
    stops?: StringNullableListFilter<"Route">
    vehicleNumber?: StringFilter<"Route"> | string
    driverName?: StringFilter<"Route"> | string
    driverMobile?: StringFilter<"Route"> | string
    capacity?: IntFilter<"Route"> | number
    isActive?: BoolFilter<"Route"> | boolean
    createdAt?: DateTimeFilter<"Route"> | Date | string
    updatedAt?: DateTimeFilter<"Route"> | Date | string
    schoolId?: StringFilter<"Route"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    students?: StudentListRelationFilter
  }, "id">

  export type RouteOrderByWithAggregationInput = {
    id?: SortOrder
    routeName?: SortOrder
    stops?: SortOrder
    vehicleNumber?: SortOrder
    driverName?: SortOrder
    driverMobile?: SortOrder
    capacity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
    _count?: RouteCountOrderByAggregateInput
    _avg?: RouteAvgOrderByAggregateInput
    _max?: RouteMaxOrderByAggregateInput
    _min?: RouteMinOrderByAggregateInput
    _sum?: RouteSumOrderByAggregateInput
  }

  export type RouteScalarWhereWithAggregatesInput = {
    AND?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    OR?: RouteScalarWhereWithAggregatesInput[]
    NOT?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Route"> | string
    routeName?: StringWithAggregatesFilter<"Route"> | string
    stops?: StringNullableListFilter<"Route">
    vehicleNumber?: StringWithAggregatesFilter<"Route"> | string
    driverName?: StringWithAggregatesFilter<"Route"> | string
    driverMobile?: StringWithAggregatesFilter<"Route"> | string
    capacity?: IntWithAggregatesFilter<"Route"> | number
    isActive?: BoolWithAggregatesFilter<"Route"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Route"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Route"> | Date | string
    schoolId?: StringWithAggregatesFilter<"Route"> | string
  }

  export type SchoolCreateInput = {
    id?: string
    schoolName: string
    schoolType: string
    boardAffiliation: string
    establishmentYear: string
    schoolCode: string
    udiseCode?: string | null
    schoolCategory: string
    officialEmail: string
    landlineNumber?: string | null
    mobileNumber: string
    alternativeMobile?: string | null
    website?: string | null
    schoolAddress: string
    city: string
    state: string
    pinCode: string
    country: string
    adminName: string
    adminDesignation: string
    adminEmail: string
    adminPassword: string
    confirmPassword: string
    adminMobile: string
    studentStrength: string
    teachingStaff: string
    nonTeachingStaff: string
    totalClasses: string
    mediumOfInstruction?: SchoolCreatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolCreatestreamsOfferedInput | string[]
    plan: string
    billingCycle: string
    termsAccepted: boolean
    privacyAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentCreateNestedManyWithoutSchoolInput
    parents?: ParentCreateNestedManyWithoutSchoolInput
    feeStructures?: FeeStructureCreateNestedManyWithoutSchoolInput
    routes?: RouteCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: string
    schoolName: string
    schoolType: string
    boardAffiliation: string
    establishmentYear: string
    schoolCode: string
    udiseCode?: string | null
    schoolCategory: string
    officialEmail: string
    landlineNumber?: string | null
    mobileNumber: string
    alternativeMobile?: string | null
    website?: string | null
    schoolAddress: string
    city: string
    state: string
    pinCode: string
    country: string
    adminName: string
    adminDesignation: string
    adminEmail: string
    adminPassword: string
    confirmPassword: string
    adminMobile: string
    studentStrength: string
    teachingStaff: string
    nonTeachingStaff: string
    totalClasses: string
    mediumOfInstruction?: SchoolCreatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolCreatestreamsOfferedInput | string[]
    plan: string
    billingCycle: string
    termsAccepted: boolean
    privacyAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutSchoolInput
    parents?: ParentUncheckedCreateNestedManyWithoutSchoolInput
    feeStructures?: FeeStructureUncheckedCreateNestedManyWithoutSchoolInput
    routes?: RouteUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolType?: StringFieldUpdateOperationsInput | string
    boardAffiliation?: StringFieldUpdateOperationsInput | string
    establishmentYear?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    schoolCategory?: StringFieldUpdateOperationsInput | string
    officialEmail?: StringFieldUpdateOperationsInput | string
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: StringFieldUpdateOperationsInput | string
    alternativeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    schoolAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    adminName?: StringFieldUpdateOperationsInput | string
    adminDesignation?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    confirmPassword?: StringFieldUpdateOperationsInput | string
    adminMobile?: StringFieldUpdateOperationsInput | string
    studentStrength?: StringFieldUpdateOperationsInput | string
    teachingStaff?: StringFieldUpdateOperationsInput | string
    nonTeachingStaff?: StringFieldUpdateOperationsInput | string
    totalClasses?: StringFieldUpdateOperationsInput | string
    mediumOfInstruction?: SchoolUpdatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolUpdatestreamsOfferedInput | string[]
    plan?: StringFieldUpdateOperationsInput | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    termsAccepted?: BoolFieldUpdateOperationsInput | boolean
    privacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutSchoolNestedInput
    parents?: ParentUpdateManyWithoutSchoolNestedInput
    feeStructures?: FeeStructureUpdateManyWithoutSchoolNestedInput
    routes?: RouteUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolType?: StringFieldUpdateOperationsInput | string
    boardAffiliation?: StringFieldUpdateOperationsInput | string
    establishmentYear?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    schoolCategory?: StringFieldUpdateOperationsInput | string
    officialEmail?: StringFieldUpdateOperationsInput | string
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: StringFieldUpdateOperationsInput | string
    alternativeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    schoolAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    adminName?: StringFieldUpdateOperationsInput | string
    adminDesignation?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    confirmPassword?: StringFieldUpdateOperationsInput | string
    adminMobile?: StringFieldUpdateOperationsInput | string
    studentStrength?: StringFieldUpdateOperationsInput | string
    teachingStaff?: StringFieldUpdateOperationsInput | string
    nonTeachingStaff?: StringFieldUpdateOperationsInput | string
    totalClasses?: StringFieldUpdateOperationsInput | string
    mediumOfInstruction?: SchoolUpdatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolUpdatestreamsOfferedInput | string[]
    plan?: StringFieldUpdateOperationsInput | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    termsAccepted?: BoolFieldUpdateOperationsInput | boolean
    privacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutSchoolNestedInput
    parents?: ParentUncheckedUpdateManyWithoutSchoolNestedInput
    feeStructures?: FeeStructureUncheckedUpdateManyWithoutSchoolNestedInput
    routes?: RouteUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: string
    schoolName: string
    schoolType: string
    boardAffiliation: string
    establishmentYear: string
    schoolCode: string
    udiseCode?: string | null
    schoolCategory: string
    officialEmail: string
    landlineNumber?: string | null
    mobileNumber: string
    alternativeMobile?: string | null
    website?: string | null
    schoolAddress: string
    city: string
    state: string
    pinCode: string
    country: string
    adminName: string
    adminDesignation: string
    adminEmail: string
    adminPassword: string
    confirmPassword: string
    adminMobile: string
    studentStrength: string
    teachingStaff: string
    nonTeachingStaff: string
    totalClasses: string
    mediumOfInstruction?: SchoolCreatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolCreatestreamsOfferedInput | string[]
    plan: string
    billingCycle: string
    termsAccepted: boolean
    privacyAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolType?: StringFieldUpdateOperationsInput | string
    boardAffiliation?: StringFieldUpdateOperationsInput | string
    establishmentYear?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    schoolCategory?: StringFieldUpdateOperationsInput | string
    officialEmail?: StringFieldUpdateOperationsInput | string
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: StringFieldUpdateOperationsInput | string
    alternativeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    schoolAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    adminName?: StringFieldUpdateOperationsInput | string
    adminDesignation?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    confirmPassword?: StringFieldUpdateOperationsInput | string
    adminMobile?: StringFieldUpdateOperationsInput | string
    studentStrength?: StringFieldUpdateOperationsInput | string
    teachingStaff?: StringFieldUpdateOperationsInput | string
    nonTeachingStaff?: StringFieldUpdateOperationsInput | string
    totalClasses?: StringFieldUpdateOperationsInput | string
    mediumOfInstruction?: SchoolUpdatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolUpdatestreamsOfferedInput | string[]
    plan?: StringFieldUpdateOperationsInput | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    termsAccepted?: BoolFieldUpdateOperationsInput | boolean
    privacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolType?: StringFieldUpdateOperationsInput | string
    boardAffiliation?: StringFieldUpdateOperationsInput | string
    establishmentYear?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    schoolCategory?: StringFieldUpdateOperationsInput | string
    officialEmail?: StringFieldUpdateOperationsInput | string
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: StringFieldUpdateOperationsInput | string
    alternativeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    schoolAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    adminName?: StringFieldUpdateOperationsInput | string
    adminDesignation?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    confirmPassword?: StringFieldUpdateOperationsInput | string
    adminMobile?: StringFieldUpdateOperationsInput | string
    studentStrength?: StringFieldUpdateOperationsInput | string
    teachingStaff?: StringFieldUpdateOperationsInput | string
    nonTeachingStaff?: StringFieldUpdateOperationsInput | string
    totalClasses?: StringFieldUpdateOperationsInput | string
    mediumOfInstruction?: SchoolUpdatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolUpdatestreamsOfferedInput | string[]
    plan?: StringFieldUpdateOperationsInput | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    termsAccepted?: BoolFieldUpdateOperationsInput | boolean
    privacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetCreateInput = {
    id?: string
    adminEmail: string
    otpSecret?: string | null
    hashedOtp?: string | null
    expiresAt: Date | string
    attempts?: number
    createdAt?: Date | string
  }

  export type PasswordResetUncheckedCreateInput = {
    id?: string
    adminEmail: string
    otpSecret?: string | null
    hashedOtp?: string | null
    expiresAt: Date | string
    attempts?: number
    createdAt?: Date | string
  }

  export type PasswordResetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    otpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    hashedOtp?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    otpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    hashedOtp?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetCreateManyInput = {
    id?: string
    adminEmail: string
    otpSecret?: string | null
    hashedOtp?: string | null
    expiresAt: Date | string
    attempts?: number
    createdAt?: Date | string
  }

  export type PasswordResetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    otpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    hashedOtp?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    otpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    hashedOtp?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    studentId: string
    admissionNumber: string
    qrCodeValue: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth: Date | string
    gender: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    photoUrl?: string | null
    parentPrimaryMobile: string
    parentAlternateMobile?: string | null
    parentEmail?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    admissionDate: Date | string
    previousSchoolId?: string | null
    usesTransport?: boolean
    pickupPoint?: string | null
    dropPoint?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutStudentsInput
    parent: ParentCreateNestedOneWithoutStudentsInput
    route?: RouteCreateNestedOneWithoutStudentsInput
    academicHistory?: StudentAcademicHistoryCreateNestedManyWithoutStudentInput
    documents?: DocumentCreateNestedManyWithoutStudentInput
    studentFees?: StudentFeeCreateNestedManyWithoutStudentInput
    feePayments?: FeePaymentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    studentId: string
    admissionNumber: string
    qrCodeValue: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth: Date | string
    gender: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    photoUrl?: string | null
    parentPrimaryMobile: string
    parentAlternateMobile?: string | null
    parentEmail?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    admissionDate: Date | string
    previousSchoolId?: string | null
    usesTransport?: boolean
    transportRouteId?: string | null
    pickupPoint?: string | null
    dropPoint?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
    parentId: string
    academicHistory?: StudentAcademicHistoryUncheckedCreateNestedManyWithoutStudentInput
    documents?: DocumentUncheckedCreateNestedManyWithoutStudentInput
    studentFees?: StudentFeeUncheckedCreateNestedManyWithoutStudentInput
    feePayments?: FeePaymentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    qrCodeValue?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentPrimaryMobile?: StringFieldUpdateOperationsInput | string
    parentAlternateMobile?: NullableStringFieldUpdateOperationsInput | string | null
    parentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchoolId?: NullableStringFieldUpdateOperationsInput | string | null
    usesTransport?: BoolFieldUpdateOperationsInput | boolean
    pickupPoint?: NullableStringFieldUpdateOperationsInput | string | null
    dropPoint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutStudentsNestedInput
    parent?: ParentUpdateOneRequiredWithoutStudentsNestedInput
    route?: RouteUpdateOneWithoutStudentsNestedInput
    academicHistory?: StudentAcademicHistoryUpdateManyWithoutStudentNestedInput
    documents?: DocumentUpdateManyWithoutStudentNestedInput
    studentFees?: StudentFeeUpdateManyWithoutStudentNestedInput
    feePayments?: FeePaymentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    qrCodeValue?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentPrimaryMobile?: StringFieldUpdateOperationsInput | string
    parentAlternateMobile?: NullableStringFieldUpdateOperationsInput | string | null
    parentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchoolId?: NullableStringFieldUpdateOperationsInput | string | null
    usesTransport?: BoolFieldUpdateOperationsInput | boolean
    transportRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    pickupPoint?: NullableStringFieldUpdateOperationsInput | string | null
    dropPoint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    academicHistory?: StudentAcademicHistoryUncheckedUpdateManyWithoutStudentNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutStudentNestedInput
    studentFees?: StudentFeeUncheckedUpdateManyWithoutStudentNestedInput
    feePayments?: FeePaymentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    studentId: string
    admissionNumber: string
    qrCodeValue: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth: Date | string
    gender: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    photoUrl?: string | null
    parentPrimaryMobile: string
    parentAlternateMobile?: string | null
    parentEmail?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    admissionDate: Date | string
    previousSchoolId?: string | null
    usesTransport?: boolean
    transportRouteId?: string | null
    pickupPoint?: string | null
    dropPoint?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
    parentId: string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    qrCodeValue?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentPrimaryMobile?: StringFieldUpdateOperationsInput | string
    parentAlternateMobile?: NullableStringFieldUpdateOperationsInput | string | null
    parentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchoolId?: NullableStringFieldUpdateOperationsInput | string | null
    usesTransport?: BoolFieldUpdateOperationsInput | boolean
    pickupPoint?: NullableStringFieldUpdateOperationsInput | string | null
    dropPoint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    qrCodeValue?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentPrimaryMobile?: StringFieldUpdateOperationsInput | string
    parentAlternateMobile?: NullableStringFieldUpdateOperationsInput | string | null
    parentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchoolId?: NullableStringFieldUpdateOperationsInput | string | null
    usesTransport?: BoolFieldUpdateOperationsInput | boolean
    transportRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    pickupPoint?: NullableStringFieldUpdateOperationsInput | string | null
    dropPoint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentAcademicHistoryCreateInput = {
    id?: string
    academicYear: string
    class: string
    section: string
    rollNumber: number
    classTeacher?: string | null
    promotionStatus?: string
    attendancePresent?: number
    attendanceAbsent?: number
    finalGrade?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutAcademicHistoryInput
  }

  export type StudentAcademicHistoryUncheckedCreateInput = {
    id?: string
    academicYear: string
    class: string
    section: string
    rollNumber: number
    classTeacher?: string | null
    promotionStatus?: string
    attendancePresent?: number
    attendanceAbsent?: number
    finalGrade?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentId: string
  }

  export type StudentAcademicHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    rollNumber?: IntFieldUpdateOperationsInput | number
    classTeacher?: NullableStringFieldUpdateOperationsInput | string | null
    promotionStatus?: StringFieldUpdateOperationsInput | string
    attendancePresent?: IntFieldUpdateOperationsInput | number
    attendanceAbsent?: IntFieldUpdateOperationsInput | number
    finalGrade?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutAcademicHistoryNestedInput
  }

  export type StudentAcademicHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    rollNumber?: IntFieldUpdateOperationsInput | number
    classTeacher?: NullableStringFieldUpdateOperationsInput | string | null
    promotionStatus?: StringFieldUpdateOperationsInput | string
    attendancePresent?: IntFieldUpdateOperationsInput | number
    attendanceAbsent?: IntFieldUpdateOperationsInput | number
    finalGrade?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentAcademicHistoryCreateManyInput = {
    id?: string
    academicYear: string
    class: string
    section: string
    rollNumber: number
    classTeacher?: string | null
    promotionStatus?: string
    attendancePresent?: number
    attendanceAbsent?: number
    finalGrade?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentId: string
  }

  export type StudentAcademicHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    rollNumber?: IntFieldUpdateOperationsInput | number
    classTeacher?: NullableStringFieldUpdateOperationsInput | string | null
    promotionStatus?: StringFieldUpdateOperationsInput | string
    attendancePresent?: IntFieldUpdateOperationsInput | number
    attendanceAbsent?: IntFieldUpdateOperationsInput | number
    finalGrade?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAcademicHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    rollNumber?: IntFieldUpdateOperationsInput | number
    classTeacher?: NullableStringFieldUpdateOperationsInput | string | null
    promotionStatus?: StringFieldUpdateOperationsInput | string
    attendancePresent?: IntFieldUpdateOperationsInput | number
    attendanceAbsent?: IntFieldUpdateOperationsInput | number
    finalGrade?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type ParentCreateInput = {
    id?: string
    fatherName: string
    fatherOccupation?: string | null
    fatherMobile: string
    fatherEmail?: string | null
    fatherAadhar?: string | null
    motherName: string
    motherOccupation?: string | null
    motherMobile: string
    motherEmail?: string | null
    motherAadhar?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    guardianMobile?: string | null
    guardianEmail?: string | null
    primaryContact?: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutParentsInput
    students?: StudentCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateInput = {
    id?: string
    fatherName: string
    fatherOccupation?: string | null
    fatherMobile: string
    fatherEmail?: string | null
    fatherAadhar?: string | null
    motherName: string
    motherOccupation?: string | null
    motherMobile: string
    motherEmail?: string | null
    motherAadhar?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    guardianMobile?: string | null
    guardianEmail?: string | null
    primaryContact?: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
    students?: StudentUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    fatherMobile?: StringFieldUpdateOperationsInput | string
    fatherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fatherAadhar?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: StringFieldUpdateOperationsInput | string
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherMobile?: StringFieldUpdateOperationsInput | string
    motherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    motherAadhar?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    guardianMobile?: NullableStringFieldUpdateOperationsInput | string | null
    guardianEmail?: NullableStringFieldUpdateOperationsInput | string | null
    primaryContact?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutParentsNestedInput
    students?: StudentUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    fatherMobile?: StringFieldUpdateOperationsInput | string
    fatherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fatherAadhar?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: StringFieldUpdateOperationsInput | string
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherMobile?: StringFieldUpdateOperationsInput | string
    motherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    motherAadhar?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    guardianMobile?: NullableStringFieldUpdateOperationsInput | string | null
    guardianEmail?: NullableStringFieldUpdateOperationsInput | string | null
    primaryContact?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    students?: StudentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ParentCreateManyInput = {
    id?: string
    fatherName: string
    fatherOccupation?: string | null
    fatherMobile: string
    fatherEmail?: string | null
    fatherAadhar?: string | null
    motherName: string
    motherOccupation?: string | null
    motherMobile: string
    motherEmail?: string | null
    motherAadhar?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    guardianMobile?: string | null
    guardianEmail?: string | null
    primaryContact?: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
  }

  export type ParentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    fatherMobile?: StringFieldUpdateOperationsInput | string
    fatherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fatherAadhar?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: StringFieldUpdateOperationsInput | string
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherMobile?: StringFieldUpdateOperationsInput | string
    motherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    motherAadhar?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    guardianMobile?: NullableStringFieldUpdateOperationsInput | string | null
    guardianEmail?: NullableStringFieldUpdateOperationsInput | string | null
    primaryContact?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    fatherMobile?: StringFieldUpdateOperationsInput | string
    fatherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fatherAadhar?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: StringFieldUpdateOperationsInput | string
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherMobile?: StringFieldUpdateOperationsInput | string
    motherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    motherAadhar?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    guardianMobile?: NullableStringFieldUpdateOperationsInput | string | null
    guardianEmail?: NullableStringFieldUpdateOperationsInput | string | null
    primaryContact?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentCreateInput = {
    id?: string
    documentType: string
    documentUrl: string
    fileName: string
    fileSize: number
    mimeType: string
    verificationStatus?: string
    verifiedBy?: string | null
    verifiedAt?: Date | string | null
    rejectionReason?: string | null
    uploadedAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    documentType: string
    documentUrl: string
    fileName: string
    fileSize: number
    mimeType: string
    verificationStatus?: string
    verifiedBy?: string | null
    verifiedAt?: Date | string | null
    rejectionReason?: string | null
    uploadedAt?: Date | string
    updatedAt?: Date | string
    studentId: string
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    documentType: string
    documentUrl: string
    fileName: string
    fileSize: number
    mimeType: string
    verificationStatus?: string
    verifiedBy?: string | null
    verifiedAt?: Date | string | null
    rejectionReason?: string | null
    uploadedAt?: Date | string
    updatedAt?: Date | string
    studentId: string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type FeeStructureCreateInput = {
    id?: string
    class: string
    academicYear: string
    tuitionFeeMonthly: number
    transportFeeMonthly?: number
    examFeeYearly?: number
    admissionFee?: number
    booksFee?: number
    idCardFee?: number
    activityFee?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutFeeStructuresInput
  }

  export type FeeStructureUncheckedCreateInput = {
    id?: string
    class: string
    academicYear: string
    tuitionFeeMonthly: number
    transportFeeMonthly?: number
    examFeeYearly?: number
    admissionFee?: number
    booksFee?: number
    idCardFee?: number
    activityFee?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
  }

  export type FeeStructureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    tuitionFeeMonthly?: IntFieldUpdateOperationsInput | number
    transportFeeMonthly?: IntFieldUpdateOperationsInput | number
    examFeeYearly?: IntFieldUpdateOperationsInput | number
    admissionFee?: IntFieldUpdateOperationsInput | number
    booksFee?: IntFieldUpdateOperationsInput | number
    idCardFee?: IntFieldUpdateOperationsInput | number
    activityFee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutFeeStructuresNestedInput
  }

  export type FeeStructureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    tuitionFeeMonthly?: IntFieldUpdateOperationsInput | number
    transportFeeMonthly?: IntFieldUpdateOperationsInput | number
    examFeeYearly?: IntFieldUpdateOperationsInput | number
    admissionFee?: IntFieldUpdateOperationsInput | number
    booksFee?: IntFieldUpdateOperationsInput | number
    idCardFee?: IntFieldUpdateOperationsInput | number
    activityFee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type FeeStructureCreateManyInput = {
    id?: string
    class: string
    academicYear: string
    tuitionFeeMonthly: number
    transportFeeMonthly?: number
    examFeeYearly?: number
    admissionFee?: number
    booksFee?: number
    idCardFee?: number
    activityFee?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
  }

  export type FeeStructureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    tuitionFeeMonthly?: IntFieldUpdateOperationsInput | number
    transportFeeMonthly?: IntFieldUpdateOperationsInput | number
    examFeeYearly?: IntFieldUpdateOperationsInput | number
    admissionFee?: IntFieldUpdateOperationsInput | number
    booksFee?: IntFieldUpdateOperationsInput | number
    idCardFee?: IntFieldUpdateOperationsInput | number
    activityFee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeStructureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    tuitionFeeMonthly?: IntFieldUpdateOperationsInput | number
    transportFeeMonthly?: IntFieldUpdateOperationsInput | number
    examFeeYearly?: IntFieldUpdateOperationsInput | number
    admissionFee?: IntFieldUpdateOperationsInput | number
    booksFee?: IntFieldUpdateOperationsInput | number
    idCardFee?: IntFieldUpdateOperationsInput | number
    activityFee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentFeeCreateInput = {
    id?: string
    academicYear: string
    tuitionFee: number
    transportFee?: number
    examFee?: number
    admissionFee?: number
    otherFees?: number
    discountPercentage?: number
    discountAmount?: number
    specialCharges?: number
    totalFee: number
    totalPayable: number
    totalPaid?: number
    totalPending: number
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutStudentFeesInput
    installments?: FeeInstallmentCreateNestedManyWithoutStudentFeeInput
  }

  export type StudentFeeUncheckedCreateInput = {
    id?: string
    academicYear: string
    tuitionFee: number
    transportFee?: number
    examFee?: number
    admissionFee?: number
    otherFees?: number
    discountPercentage?: number
    discountAmount?: number
    specialCharges?: number
    totalFee: number
    totalPayable: number
    totalPaid?: number
    totalPending: number
    createdAt?: Date | string
    updatedAt?: Date | string
    studentId: string
    installments?: FeeInstallmentUncheckedCreateNestedManyWithoutStudentFeeInput
  }

  export type StudentFeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    tuitionFee?: IntFieldUpdateOperationsInput | number
    transportFee?: IntFieldUpdateOperationsInput | number
    examFee?: IntFieldUpdateOperationsInput | number
    admissionFee?: IntFieldUpdateOperationsInput | number
    otherFees?: IntFieldUpdateOperationsInput | number
    discountPercentage?: IntFieldUpdateOperationsInput | number
    discountAmount?: IntFieldUpdateOperationsInput | number
    specialCharges?: IntFieldUpdateOperationsInput | number
    totalFee?: IntFieldUpdateOperationsInput | number
    totalPayable?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    totalPending?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutStudentFeesNestedInput
    installments?: FeeInstallmentUpdateManyWithoutStudentFeeNestedInput
  }

  export type StudentFeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    tuitionFee?: IntFieldUpdateOperationsInput | number
    transportFee?: IntFieldUpdateOperationsInput | number
    examFee?: IntFieldUpdateOperationsInput | number
    admissionFee?: IntFieldUpdateOperationsInput | number
    otherFees?: IntFieldUpdateOperationsInput | number
    discountPercentage?: IntFieldUpdateOperationsInput | number
    discountAmount?: IntFieldUpdateOperationsInput | number
    specialCharges?: IntFieldUpdateOperationsInput | number
    totalFee?: IntFieldUpdateOperationsInput | number
    totalPayable?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    totalPending?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
    installments?: FeeInstallmentUncheckedUpdateManyWithoutStudentFeeNestedInput
  }

  export type StudentFeeCreateManyInput = {
    id?: string
    academicYear: string
    tuitionFee: number
    transportFee?: number
    examFee?: number
    admissionFee?: number
    otherFees?: number
    discountPercentage?: number
    discountAmount?: number
    specialCharges?: number
    totalFee: number
    totalPayable: number
    totalPaid?: number
    totalPending: number
    createdAt?: Date | string
    updatedAt?: Date | string
    studentId: string
  }

  export type StudentFeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    tuitionFee?: IntFieldUpdateOperationsInput | number
    transportFee?: IntFieldUpdateOperationsInput | number
    examFee?: IntFieldUpdateOperationsInput | number
    admissionFee?: IntFieldUpdateOperationsInput | number
    otherFees?: IntFieldUpdateOperationsInput | number
    discountPercentage?: IntFieldUpdateOperationsInput | number
    discountAmount?: IntFieldUpdateOperationsInput | number
    specialCharges?: IntFieldUpdateOperationsInput | number
    totalFee?: IntFieldUpdateOperationsInput | number
    totalPayable?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    totalPending?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentFeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    tuitionFee?: IntFieldUpdateOperationsInput | number
    transportFee?: IntFieldUpdateOperationsInput | number
    examFee?: IntFieldUpdateOperationsInput | number
    admissionFee?: IntFieldUpdateOperationsInput | number
    otherFees?: IntFieldUpdateOperationsInput | number
    discountPercentage?: IntFieldUpdateOperationsInput | number
    discountAmount?: IntFieldUpdateOperationsInput | number
    specialCharges?: IntFieldUpdateOperationsInput | number
    totalFee?: IntFieldUpdateOperationsInput | number
    totalPayable?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    totalPending?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type FeeInstallmentCreateInput = {
    id?: string
    installmentNumber: number
    month: string
    dueDate: Date | string
    amountDue: number
    amountPaid?: number
    lateFee?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentFee: StudentFeeCreateNestedOneWithoutInstallmentsInput
    payments?: FeePaymentCreateNestedManyWithoutInstallmentInput
  }

  export type FeeInstallmentUncheckedCreateInput = {
    id?: string
    installmentNumber: number
    month: string
    dueDate: Date | string
    amountDue: number
    amountPaid?: number
    lateFee?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentFeeId: string
    payments?: FeePaymentUncheckedCreateNestedManyWithoutInstallmentInput
  }

  export type FeeInstallmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    installmentNumber?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amountDue?: IntFieldUpdateOperationsInput | number
    amountPaid?: IntFieldUpdateOperationsInput | number
    lateFee?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentFee?: StudentFeeUpdateOneRequiredWithoutInstallmentsNestedInput
    payments?: FeePaymentUpdateManyWithoutInstallmentNestedInput
  }

  export type FeeInstallmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    installmentNumber?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amountDue?: IntFieldUpdateOperationsInput | number
    amountPaid?: IntFieldUpdateOperationsInput | number
    lateFee?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentFeeId?: StringFieldUpdateOperationsInput | string
    payments?: FeePaymentUncheckedUpdateManyWithoutInstallmentNestedInput
  }

  export type FeeInstallmentCreateManyInput = {
    id?: string
    installmentNumber: number
    month: string
    dueDate: Date | string
    amountDue: number
    amountPaid?: number
    lateFee?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentFeeId: string
  }

  export type FeeInstallmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    installmentNumber?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amountDue?: IntFieldUpdateOperationsInput | number
    amountPaid?: IntFieldUpdateOperationsInput | number
    lateFee?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeInstallmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    installmentNumber?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amountDue?: IntFieldUpdateOperationsInput | number
    amountPaid?: IntFieldUpdateOperationsInput | number
    lateFee?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentFeeId?: StringFieldUpdateOperationsInput | string
  }

  export type FeePaymentCreateInput = {
    id?: string
    amountPaid: number
    paymentDate?: Date | string
    paymentMethod: string
    transactionId?: string | null
    receiptNumber: string
    paymentFor: string
    remarks?: string | null
    paidBy?: string | null
    createdAt?: Date | string
    student: StudentCreateNestedOneWithoutFeePaymentsInput
    installment?: FeeInstallmentCreateNestedOneWithoutPaymentsInput
  }

  export type FeePaymentUncheckedCreateInput = {
    id?: string
    amountPaid: number
    paymentDate?: Date | string
    paymentMethod: string
    transactionId?: string | null
    receiptNumber: string
    paymentFor: string
    remarks?: string | null
    paidBy?: string | null
    createdAt?: Date | string
    studentId: string
    installmentId?: string | null
  }

  export type FeePaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaid?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNumber?: StringFieldUpdateOperationsInput | string
    paymentFor?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    paidBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutFeePaymentsNestedInput
    installment?: FeeInstallmentUpdateOneWithoutPaymentsNestedInput
  }

  export type FeePaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaid?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNumber?: StringFieldUpdateOperationsInput | string
    paymentFor?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    paidBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
    installmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeePaymentCreateManyInput = {
    id?: string
    amountPaid: number
    paymentDate?: Date | string
    paymentMethod: string
    transactionId?: string | null
    receiptNumber: string
    paymentFor: string
    remarks?: string | null
    paidBy?: string | null
    createdAt?: Date | string
    studentId: string
    installmentId?: string | null
  }

  export type FeePaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaid?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNumber?: StringFieldUpdateOperationsInput | string
    paymentFor?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    paidBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeePaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaid?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNumber?: StringFieldUpdateOperationsInput | string
    paymentFor?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    paidBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
    installmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RouteCreateInput = {
    id?: string
    routeName: string
    stops?: RouteCreatestopsInput | string[]
    vehicleNumber: string
    driverName: string
    driverMobile: string
    capacity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutRoutesInput
    students?: StudentCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateInput = {
    id?: string
    routeName: string
    stops?: RouteCreatestopsInput | string[]
    vehicleNumber: string
    driverName: string
    driverMobile: string
    capacity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
    students?: StudentUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    stops?: RouteUpdatestopsInput | string[]
    vehicleNumber?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    driverMobile?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutRoutesNestedInput
    students?: StudentUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    stops?: RouteUpdatestopsInput | string[]
    vehicleNumber?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    driverMobile?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    students?: StudentUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteCreateManyInput = {
    id?: string
    routeName: string
    stops?: RouteCreatestopsInput | string[]
    vehicleNumber: string
    driverName: string
    driverMobile: string
    capacity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
  }

  export type RouteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    stops?: RouteUpdatestopsInput | string[]
    vehicleNumber?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    driverMobile?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    stops?: RouteUpdatestopsInput | string[]
    vehicleNumber?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    driverMobile?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type ParentListRelationFilter = {
    every?: ParentWhereInput
    some?: ParentWhereInput
    none?: ParentWhereInput
  }

  export type FeeStructureListRelationFilter = {
    every?: FeeStructureWhereInput
    some?: FeeStructureWhereInput
    none?: FeeStructureWhereInput
  }

  export type RouteListRelationFilter = {
    every?: RouteWhereInput
    some?: RouteWhereInput
    none?: RouteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeeStructureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    schoolName?: SortOrder
    schoolType?: SortOrder
    boardAffiliation?: SortOrder
    establishmentYear?: SortOrder
    schoolCode?: SortOrder
    udiseCode?: SortOrder
    schoolCategory?: SortOrder
    officialEmail?: SortOrder
    landlineNumber?: SortOrder
    mobileNumber?: SortOrder
    alternativeMobile?: SortOrder
    website?: SortOrder
    schoolAddress?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pinCode?: SortOrder
    country?: SortOrder
    adminName?: SortOrder
    adminDesignation?: SortOrder
    adminEmail?: SortOrder
    adminPassword?: SortOrder
    confirmPassword?: SortOrder
    adminMobile?: SortOrder
    studentStrength?: SortOrder
    teachingStaff?: SortOrder
    nonTeachingStaff?: SortOrder
    totalClasses?: SortOrder
    mediumOfInstruction?: SortOrder
    streamsOffered?: SortOrder
    plan?: SortOrder
    billingCycle?: SortOrder
    termsAccepted?: SortOrder
    privacyAccepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolName?: SortOrder
    schoolType?: SortOrder
    boardAffiliation?: SortOrder
    establishmentYear?: SortOrder
    schoolCode?: SortOrder
    udiseCode?: SortOrder
    schoolCategory?: SortOrder
    officialEmail?: SortOrder
    landlineNumber?: SortOrder
    mobileNumber?: SortOrder
    alternativeMobile?: SortOrder
    website?: SortOrder
    schoolAddress?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pinCode?: SortOrder
    country?: SortOrder
    adminName?: SortOrder
    adminDesignation?: SortOrder
    adminEmail?: SortOrder
    adminPassword?: SortOrder
    confirmPassword?: SortOrder
    adminMobile?: SortOrder
    studentStrength?: SortOrder
    teachingStaff?: SortOrder
    nonTeachingStaff?: SortOrder
    totalClasses?: SortOrder
    plan?: SortOrder
    billingCycle?: SortOrder
    termsAccepted?: SortOrder
    privacyAccepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    schoolName?: SortOrder
    schoolType?: SortOrder
    boardAffiliation?: SortOrder
    establishmentYear?: SortOrder
    schoolCode?: SortOrder
    udiseCode?: SortOrder
    schoolCategory?: SortOrder
    officialEmail?: SortOrder
    landlineNumber?: SortOrder
    mobileNumber?: SortOrder
    alternativeMobile?: SortOrder
    website?: SortOrder
    schoolAddress?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pinCode?: SortOrder
    country?: SortOrder
    adminName?: SortOrder
    adminDesignation?: SortOrder
    adminEmail?: SortOrder
    adminPassword?: SortOrder
    confirmPassword?: SortOrder
    adminMobile?: SortOrder
    studentStrength?: SortOrder
    teachingStaff?: SortOrder
    nonTeachingStaff?: SortOrder
    totalClasses?: SortOrder
    plan?: SortOrder
    billingCycle?: SortOrder
    termsAccepted?: SortOrder
    privacyAccepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PasswordResetCountOrderByAggregateInput = {
    id?: SortOrder
    adminEmail?: SortOrder
    otpSecret?: SortOrder
    hashedOtp?: SortOrder
    expiresAt?: SortOrder
    attempts?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetAvgOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type PasswordResetMaxOrderByAggregateInput = {
    id?: SortOrder
    adminEmail?: SortOrder
    otpSecret?: SortOrder
    hashedOtp?: SortOrder
    expiresAt?: SortOrder
    attempts?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetMinOrderByAggregateInput = {
    id?: SortOrder
    adminEmail?: SortOrder
    otpSecret?: SortOrder
    hashedOtp?: SortOrder
    expiresAt?: SortOrder
    attempts?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetSumOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type ParentScalarRelationFilter = {
    is?: ParentWhereInput
    isNot?: ParentWhereInput
  }

  export type RouteNullableScalarRelationFilter = {
    is?: RouteWhereInput | null
    isNot?: RouteWhereInput | null
  }

  export type StudentAcademicHistoryListRelationFilter = {
    every?: StudentAcademicHistoryWhereInput
    some?: StudentAcademicHistoryWhereInput
    none?: StudentAcademicHistoryWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type StudentFeeListRelationFilter = {
    every?: StudentFeeWhereInput
    some?: StudentFeeWhereInput
    none?: StudentFeeWhereInput
  }

  export type FeePaymentListRelationFilter = {
    every?: FeePaymentWhereInput
    some?: FeePaymentWhereInput
    none?: FeePaymentWhereInput
  }

  export type StudentAcademicHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentFeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeePaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    admissionNumber?: SortOrder
    qrCodeValue?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    bloodGroup?: SortOrder
    aadharNumber?: SortOrder
    photoUrl?: SortOrder
    parentPrimaryMobile?: SortOrder
    parentAlternateMobile?: SortOrder
    parentEmail?: SortOrder
    emergencyContactName?: SortOrder
    emergencyContactPhone?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pinCode?: SortOrder
    country?: SortOrder
    admissionDate?: SortOrder
    previousSchoolId?: SortOrder
    usesTransport?: SortOrder
    transportRouteId?: SortOrder
    pickupPoint?: SortOrder
    dropPoint?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
    parentId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    admissionNumber?: SortOrder
    qrCodeValue?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    bloodGroup?: SortOrder
    aadharNumber?: SortOrder
    photoUrl?: SortOrder
    parentPrimaryMobile?: SortOrder
    parentAlternateMobile?: SortOrder
    parentEmail?: SortOrder
    emergencyContactName?: SortOrder
    emergencyContactPhone?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pinCode?: SortOrder
    country?: SortOrder
    admissionDate?: SortOrder
    previousSchoolId?: SortOrder
    usesTransport?: SortOrder
    transportRouteId?: SortOrder
    pickupPoint?: SortOrder
    dropPoint?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
    parentId?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    admissionNumber?: SortOrder
    qrCodeValue?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    bloodGroup?: SortOrder
    aadharNumber?: SortOrder
    photoUrl?: SortOrder
    parentPrimaryMobile?: SortOrder
    parentAlternateMobile?: SortOrder
    parentEmail?: SortOrder
    emergencyContactName?: SortOrder
    emergencyContactPhone?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pinCode?: SortOrder
    country?: SortOrder
    admissionDate?: SortOrder
    previousSchoolId?: SortOrder
    usesTransport?: SortOrder
    transportRouteId?: SortOrder
    pickupPoint?: SortOrder
    dropPoint?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
    parentId?: SortOrder
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type StudentAcademicHistoryStudentIdAcademicYearCompoundUniqueInput = {
    studentId: string
    academicYear: string
  }

  export type StudentAcademicHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    academicYear?: SortOrder
    class?: SortOrder
    section?: SortOrder
    rollNumber?: SortOrder
    classTeacher?: SortOrder
    promotionStatus?: SortOrder
    attendancePresent?: SortOrder
    attendanceAbsent?: SortOrder
    finalGrade?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentId?: SortOrder
  }

  export type StudentAcademicHistoryAvgOrderByAggregateInput = {
    rollNumber?: SortOrder
    attendancePresent?: SortOrder
    attendanceAbsent?: SortOrder
  }

  export type StudentAcademicHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    academicYear?: SortOrder
    class?: SortOrder
    section?: SortOrder
    rollNumber?: SortOrder
    classTeacher?: SortOrder
    promotionStatus?: SortOrder
    attendancePresent?: SortOrder
    attendanceAbsent?: SortOrder
    finalGrade?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentId?: SortOrder
  }

  export type StudentAcademicHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    academicYear?: SortOrder
    class?: SortOrder
    section?: SortOrder
    rollNumber?: SortOrder
    classTeacher?: SortOrder
    promotionStatus?: SortOrder
    attendancePresent?: SortOrder
    attendanceAbsent?: SortOrder
    finalGrade?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentId?: SortOrder
  }

  export type StudentAcademicHistorySumOrderByAggregateInput = {
    rollNumber?: SortOrder
    attendancePresent?: SortOrder
    attendanceAbsent?: SortOrder
  }

  export type ParentCountOrderByAggregateInput = {
    id?: SortOrder
    fatherName?: SortOrder
    fatherOccupation?: SortOrder
    fatherMobile?: SortOrder
    fatherEmail?: SortOrder
    fatherAadhar?: SortOrder
    motherName?: SortOrder
    motherOccupation?: SortOrder
    motherMobile?: SortOrder
    motherEmail?: SortOrder
    motherAadhar?: SortOrder
    guardianName?: SortOrder
    guardianRelation?: SortOrder
    guardianMobile?: SortOrder
    guardianEmail?: SortOrder
    primaryContact?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pinCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
  }

  export type ParentMaxOrderByAggregateInput = {
    id?: SortOrder
    fatherName?: SortOrder
    fatherOccupation?: SortOrder
    fatherMobile?: SortOrder
    fatherEmail?: SortOrder
    fatherAadhar?: SortOrder
    motherName?: SortOrder
    motherOccupation?: SortOrder
    motherMobile?: SortOrder
    motherEmail?: SortOrder
    motherAadhar?: SortOrder
    guardianName?: SortOrder
    guardianRelation?: SortOrder
    guardianMobile?: SortOrder
    guardianEmail?: SortOrder
    primaryContact?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pinCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
  }

  export type ParentMinOrderByAggregateInput = {
    id?: SortOrder
    fatherName?: SortOrder
    fatherOccupation?: SortOrder
    fatherMobile?: SortOrder
    fatherEmail?: SortOrder
    fatherAadhar?: SortOrder
    motherName?: SortOrder
    motherOccupation?: SortOrder
    motherMobile?: SortOrder
    motherEmail?: SortOrder
    motherAadhar?: SortOrder
    guardianName?: SortOrder
    guardianRelation?: SortOrder
    guardianMobile?: SortOrder
    guardianEmail?: SortOrder
    primaryContact?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pinCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    documentType?: SortOrder
    documentUrl?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    verificationStatus?: SortOrder
    verifiedBy?: SortOrder
    verifiedAt?: SortOrder
    rejectionReason?: SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
    studentId?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    documentType?: SortOrder
    documentUrl?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    verificationStatus?: SortOrder
    verifiedBy?: SortOrder
    verifiedAt?: SortOrder
    rejectionReason?: SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
    studentId?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    documentType?: SortOrder
    documentUrl?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    verificationStatus?: SortOrder
    verifiedBy?: SortOrder
    verifiedAt?: SortOrder
    rejectionReason?: SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
    studentId?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FeeStructureSchoolIdClassAcademicYearCompoundUniqueInput = {
    schoolId: string
    class: string
    academicYear: string
  }

  export type FeeStructureCountOrderByAggregateInput = {
    id?: SortOrder
    class?: SortOrder
    academicYear?: SortOrder
    tuitionFeeMonthly?: SortOrder
    transportFeeMonthly?: SortOrder
    examFeeYearly?: SortOrder
    admissionFee?: SortOrder
    booksFee?: SortOrder
    idCardFee?: SortOrder
    activityFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
  }

  export type FeeStructureAvgOrderByAggregateInput = {
    tuitionFeeMonthly?: SortOrder
    transportFeeMonthly?: SortOrder
    examFeeYearly?: SortOrder
    admissionFee?: SortOrder
    booksFee?: SortOrder
    idCardFee?: SortOrder
    activityFee?: SortOrder
  }

  export type FeeStructureMaxOrderByAggregateInput = {
    id?: SortOrder
    class?: SortOrder
    academicYear?: SortOrder
    tuitionFeeMonthly?: SortOrder
    transportFeeMonthly?: SortOrder
    examFeeYearly?: SortOrder
    admissionFee?: SortOrder
    booksFee?: SortOrder
    idCardFee?: SortOrder
    activityFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
  }

  export type FeeStructureMinOrderByAggregateInput = {
    id?: SortOrder
    class?: SortOrder
    academicYear?: SortOrder
    tuitionFeeMonthly?: SortOrder
    transportFeeMonthly?: SortOrder
    examFeeYearly?: SortOrder
    admissionFee?: SortOrder
    booksFee?: SortOrder
    idCardFee?: SortOrder
    activityFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
  }

  export type FeeStructureSumOrderByAggregateInput = {
    tuitionFeeMonthly?: SortOrder
    transportFeeMonthly?: SortOrder
    examFeeYearly?: SortOrder
    admissionFee?: SortOrder
    booksFee?: SortOrder
    idCardFee?: SortOrder
    activityFee?: SortOrder
  }

  export type FeeInstallmentListRelationFilter = {
    every?: FeeInstallmentWhereInput
    some?: FeeInstallmentWhereInput
    none?: FeeInstallmentWhereInput
  }

  export type FeeInstallmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentFeeStudentIdAcademicYearCompoundUniqueInput = {
    studentId: string
    academicYear: string
  }

  export type StudentFeeCountOrderByAggregateInput = {
    id?: SortOrder
    academicYear?: SortOrder
    tuitionFee?: SortOrder
    transportFee?: SortOrder
    examFee?: SortOrder
    admissionFee?: SortOrder
    otherFees?: SortOrder
    discountPercentage?: SortOrder
    discountAmount?: SortOrder
    specialCharges?: SortOrder
    totalFee?: SortOrder
    totalPayable?: SortOrder
    totalPaid?: SortOrder
    totalPending?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentId?: SortOrder
  }

  export type StudentFeeAvgOrderByAggregateInput = {
    tuitionFee?: SortOrder
    transportFee?: SortOrder
    examFee?: SortOrder
    admissionFee?: SortOrder
    otherFees?: SortOrder
    discountPercentage?: SortOrder
    discountAmount?: SortOrder
    specialCharges?: SortOrder
    totalFee?: SortOrder
    totalPayable?: SortOrder
    totalPaid?: SortOrder
    totalPending?: SortOrder
  }

  export type StudentFeeMaxOrderByAggregateInput = {
    id?: SortOrder
    academicYear?: SortOrder
    tuitionFee?: SortOrder
    transportFee?: SortOrder
    examFee?: SortOrder
    admissionFee?: SortOrder
    otherFees?: SortOrder
    discountPercentage?: SortOrder
    discountAmount?: SortOrder
    specialCharges?: SortOrder
    totalFee?: SortOrder
    totalPayable?: SortOrder
    totalPaid?: SortOrder
    totalPending?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentId?: SortOrder
  }

  export type StudentFeeMinOrderByAggregateInput = {
    id?: SortOrder
    academicYear?: SortOrder
    tuitionFee?: SortOrder
    transportFee?: SortOrder
    examFee?: SortOrder
    admissionFee?: SortOrder
    otherFees?: SortOrder
    discountPercentage?: SortOrder
    discountAmount?: SortOrder
    specialCharges?: SortOrder
    totalFee?: SortOrder
    totalPayable?: SortOrder
    totalPaid?: SortOrder
    totalPending?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentId?: SortOrder
  }

  export type StudentFeeSumOrderByAggregateInput = {
    tuitionFee?: SortOrder
    transportFee?: SortOrder
    examFee?: SortOrder
    admissionFee?: SortOrder
    otherFees?: SortOrder
    discountPercentage?: SortOrder
    discountAmount?: SortOrder
    specialCharges?: SortOrder
    totalFee?: SortOrder
    totalPayable?: SortOrder
    totalPaid?: SortOrder
    totalPending?: SortOrder
  }

  export type StudentFeeScalarRelationFilter = {
    is?: StudentFeeWhereInput
    isNot?: StudentFeeWhereInput
  }

  export type FeeInstallmentCountOrderByAggregateInput = {
    id?: SortOrder
    installmentNumber?: SortOrder
    month?: SortOrder
    dueDate?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    lateFee?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentFeeId?: SortOrder
  }

  export type FeeInstallmentAvgOrderByAggregateInput = {
    installmentNumber?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    lateFee?: SortOrder
  }

  export type FeeInstallmentMaxOrderByAggregateInput = {
    id?: SortOrder
    installmentNumber?: SortOrder
    month?: SortOrder
    dueDate?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    lateFee?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentFeeId?: SortOrder
  }

  export type FeeInstallmentMinOrderByAggregateInput = {
    id?: SortOrder
    installmentNumber?: SortOrder
    month?: SortOrder
    dueDate?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    lateFee?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentFeeId?: SortOrder
  }

  export type FeeInstallmentSumOrderByAggregateInput = {
    installmentNumber?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    lateFee?: SortOrder
  }

  export type FeeInstallmentNullableScalarRelationFilter = {
    is?: FeeInstallmentWhereInput | null
    isNot?: FeeInstallmentWhereInput | null
  }

  export type FeePaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amountPaid?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    transactionId?: SortOrder
    receiptNumber?: SortOrder
    paymentFor?: SortOrder
    remarks?: SortOrder
    paidBy?: SortOrder
    createdAt?: SortOrder
    studentId?: SortOrder
    installmentId?: SortOrder
  }

  export type FeePaymentAvgOrderByAggregateInput = {
    amountPaid?: SortOrder
  }

  export type FeePaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amountPaid?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    transactionId?: SortOrder
    receiptNumber?: SortOrder
    paymentFor?: SortOrder
    remarks?: SortOrder
    paidBy?: SortOrder
    createdAt?: SortOrder
    studentId?: SortOrder
    installmentId?: SortOrder
  }

  export type FeePaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amountPaid?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    transactionId?: SortOrder
    receiptNumber?: SortOrder
    paymentFor?: SortOrder
    remarks?: SortOrder
    paidBy?: SortOrder
    createdAt?: SortOrder
    studentId?: SortOrder
    installmentId?: SortOrder
  }

  export type FeePaymentSumOrderByAggregateInput = {
    amountPaid?: SortOrder
  }

  export type RouteCountOrderByAggregateInput = {
    id?: SortOrder
    routeName?: SortOrder
    stops?: SortOrder
    vehicleNumber?: SortOrder
    driverName?: SortOrder
    driverMobile?: SortOrder
    capacity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
  }

  export type RouteAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type RouteMaxOrderByAggregateInput = {
    id?: SortOrder
    routeName?: SortOrder
    vehicleNumber?: SortOrder
    driverName?: SortOrder
    driverMobile?: SortOrder
    capacity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
  }

  export type RouteMinOrderByAggregateInput = {
    id?: SortOrder
    routeName?: SortOrder
    vehicleNumber?: SortOrder
    driverName?: SortOrder
    driverMobile?: SortOrder
    capacity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
  }

  export type RouteSumOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type SchoolCreatemediumOfInstructionInput = {
    set: string[]
  }

  export type SchoolCreatestreamsOfferedInput = {
    set: string[]
  }

  export type StudentCreateNestedManyWithoutSchoolInput = {
    create?: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput> | StudentCreateWithoutSchoolInput[] | StudentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSchoolInput | StudentCreateOrConnectWithoutSchoolInput[]
    createMany?: StudentCreateManySchoolInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type ParentCreateNestedManyWithoutSchoolInput = {
    create?: XOR<ParentCreateWithoutSchoolInput, ParentUncheckedCreateWithoutSchoolInput> | ParentCreateWithoutSchoolInput[] | ParentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ParentCreateOrConnectWithoutSchoolInput | ParentCreateOrConnectWithoutSchoolInput[]
    createMany?: ParentCreateManySchoolInputEnvelope
    connect?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
  }

  export type FeeStructureCreateNestedManyWithoutSchoolInput = {
    create?: XOR<FeeStructureCreateWithoutSchoolInput, FeeStructureUncheckedCreateWithoutSchoolInput> | FeeStructureCreateWithoutSchoolInput[] | FeeStructureUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: FeeStructureCreateOrConnectWithoutSchoolInput | FeeStructureCreateOrConnectWithoutSchoolInput[]
    createMany?: FeeStructureCreateManySchoolInputEnvelope
    connect?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[]
  }

  export type RouteCreateNestedManyWithoutSchoolInput = {
    create?: XOR<RouteCreateWithoutSchoolInput, RouteUncheckedCreateWithoutSchoolInput> | RouteCreateWithoutSchoolInput[] | RouteUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutSchoolInput | RouteCreateOrConnectWithoutSchoolInput[]
    createMany?: RouteCreateManySchoolInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput> | StudentCreateWithoutSchoolInput[] | StudentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSchoolInput | StudentCreateOrConnectWithoutSchoolInput[]
    createMany?: StudentCreateManySchoolInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type ParentUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<ParentCreateWithoutSchoolInput, ParentUncheckedCreateWithoutSchoolInput> | ParentCreateWithoutSchoolInput[] | ParentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ParentCreateOrConnectWithoutSchoolInput | ParentCreateOrConnectWithoutSchoolInput[]
    createMany?: ParentCreateManySchoolInputEnvelope
    connect?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
  }

  export type FeeStructureUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<FeeStructureCreateWithoutSchoolInput, FeeStructureUncheckedCreateWithoutSchoolInput> | FeeStructureCreateWithoutSchoolInput[] | FeeStructureUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: FeeStructureCreateOrConnectWithoutSchoolInput | FeeStructureCreateOrConnectWithoutSchoolInput[]
    createMany?: FeeStructureCreateManySchoolInputEnvelope
    connect?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[]
  }

  export type RouteUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<RouteCreateWithoutSchoolInput, RouteUncheckedCreateWithoutSchoolInput> | RouteCreateWithoutSchoolInput[] | RouteUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutSchoolInput | RouteCreateOrConnectWithoutSchoolInput[]
    createMany?: RouteCreateManySchoolInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SchoolUpdatemediumOfInstructionInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SchoolUpdatestreamsOfferedInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudentUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput> | StudentCreateWithoutSchoolInput[] | StudentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSchoolInput | StudentCreateOrConnectWithoutSchoolInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutSchoolInput | StudentUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: StudentCreateManySchoolInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutSchoolInput | StudentUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutSchoolInput | StudentUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type ParentUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<ParentCreateWithoutSchoolInput, ParentUncheckedCreateWithoutSchoolInput> | ParentCreateWithoutSchoolInput[] | ParentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ParentCreateOrConnectWithoutSchoolInput | ParentCreateOrConnectWithoutSchoolInput[]
    upsert?: ParentUpsertWithWhereUniqueWithoutSchoolInput | ParentUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: ParentCreateManySchoolInputEnvelope
    set?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    disconnect?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    delete?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    connect?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    update?: ParentUpdateWithWhereUniqueWithoutSchoolInput | ParentUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: ParentUpdateManyWithWhereWithoutSchoolInput | ParentUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: ParentScalarWhereInput | ParentScalarWhereInput[]
  }

  export type FeeStructureUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<FeeStructureCreateWithoutSchoolInput, FeeStructureUncheckedCreateWithoutSchoolInput> | FeeStructureCreateWithoutSchoolInput[] | FeeStructureUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: FeeStructureCreateOrConnectWithoutSchoolInput | FeeStructureCreateOrConnectWithoutSchoolInput[]
    upsert?: FeeStructureUpsertWithWhereUniqueWithoutSchoolInput | FeeStructureUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: FeeStructureCreateManySchoolInputEnvelope
    set?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[]
    disconnect?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[]
    delete?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[]
    connect?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[]
    update?: FeeStructureUpdateWithWhereUniqueWithoutSchoolInput | FeeStructureUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: FeeStructureUpdateManyWithWhereWithoutSchoolInput | FeeStructureUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: FeeStructureScalarWhereInput | FeeStructureScalarWhereInput[]
  }

  export type RouteUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<RouteCreateWithoutSchoolInput, RouteUncheckedCreateWithoutSchoolInput> | RouteCreateWithoutSchoolInput[] | RouteUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutSchoolInput | RouteCreateOrConnectWithoutSchoolInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutSchoolInput | RouteUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: RouteCreateManySchoolInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutSchoolInput | RouteUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutSchoolInput | RouteUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput> | StudentCreateWithoutSchoolInput[] | StudentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSchoolInput | StudentCreateOrConnectWithoutSchoolInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutSchoolInput | StudentUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: StudentCreateManySchoolInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutSchoolInput | StudentUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutSchoolInput | StudentUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type ParentUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<ParentCreateWithoutSchoolInput, ParentUncheckedCreateWithoutSchoolInput> | ParentCreateWithoutSchoolInput[] | ParentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ParentCreateOrConnectWithoutSchoolInput | ParentCreateOrConnectWithoutSchoolInput[]
    upsert?: ParentUpsertWithWhereUniqueWithoutSchoolInput | ParentUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: ParentCreateManySchoolInputEnvelope
    set?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    disconnect?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    delete?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    connect?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    update?: ParentUpdateWithWhereUniqueWithoutSchoolInput | ParentUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: ParentUpdateManyWithWhereWithoutSchoolInput | ParentUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: ParentScalarWhereInput | ParentScalarWhereInput[]
  }

  export type FeeStructureUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<FeeStructureCreateWithoutSchoolInput, FeeStructureUncheckedCreateWithoutSchoolInput> | FeeStructureCreateWithoutSchoolInput[] | FeeStructureUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: FeeStructureCreateOrConnectWithoutSchoolInput | FeeStructureCreateOrConnectWithoutSchoolInput[]
    upsert?: FeeStructureUpsertWithWhereUniqueWithoutSchoolInput | FeeStructureUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: FeeStructureCreateManySchoolInputEnvelope
    set?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[]
    disconnect?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[]
    delete?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[]
    connect?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[]
    update?: FeeStructureUpdateWithWhereUniqueWithoutSchoolInput | FeeStructureUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: FeeStructureUpdateManyWithWhereWithoutSchoolInput | FeeStructureUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: FeeStructureScalarWhereInput | FeeStructureScalarWhereInput[]
  }

  export type RouteUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<RouteCreateWithoutSchoolInput, RouteUncheckedCreateWithoutSchoolInput> | RouteCreateWithoutSchoolInput[] | RouteUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutSchoolInput | RouteCreateOrConnectWithoutSchoolInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutSchoolInput | RouteUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: RouteCreateManySchoolInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutSchoolInput | RouteUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutSchoolInput | RouteUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SchoolCreateNestedOneWithoutStudentsInput = {
    create?: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutStudentsInput
    connect?: SchoolWhereUniqueInput
  }

  export type ParentCreateNestedOneWithoutStudentsInput = {
    create?: XOR<ParentCreateWithoutStudentsInput, ParentUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ParentCreateOrConnectWithoutStudentsInput
    connect?: ParentWhereUniqueInput
  }

  export type RouteCreateNestedOneWithoutStudentsInput = {
    create?: XOR<RouteCreateWithoutStudentsInput, RouteUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutStudentsInput
    connect?: RouteWhereUniqueInput
  }

  export type StudentAcademicHistoryCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentAcademicHistoryCreateWithoutStudentInput, StudentAcademicHistoryUncheckedCreateWithoutStudentInput> | StudentAcademicHistoryCreateWithoutStudentInput[] | StudentAcademicHistoryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentAcademicHistoryCreateOrConnectWithoutStudentInput | StudentAcademicHistoryCreateOrConnectWithoutStudentInput[]
    createMany?: StudentAcademicHistoryCreateManyStudentInputEnvelope
    connect?: StudentAcademicHistoryWhereUniqueInput | StudentAcademicHistoryWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutStudentInput = {
    create?: XOR<DocumentCreateWithoutStudentInput, DocumentUncheckedCreateWithoutStudentInput> | DocumentCreateWithoutStudentInput[] | DocumentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutStudentInput | DocumentCreateOrConnectWithoutStudentInput[]
    createMany?: DocumentCreateManyStudentInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type StudentFeeCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentFeeCreateWithoutStudentInput, StudentFeeUncheckedCreateWithoutStudentInput> | StudentFeeCreateWithoutStudentInput[] | StudentFeeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentFeeCreateOrConnectWithoutStudentInput | StudentFeeCreateOrConnectWithoutStudentInput[]
    createMany?: StudentFeeCreateManyStudentInputEnvelope
    connect?: StudentFeeWhereUniqueInput | StudentFeeWhereUniqueInput[]
  }

  export type FeePaymentCreateNestedManyWithoutStudentInput = {
    create?: XOR<FeePaymentCreateWithoutStudentInput, FeePaymentUncheckedCreateWithoutStudentInput> | FeePaymentCreateWithoutStudentInput[] | FeePaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeePaymentCreateOrConnectWithoutStudentInput | FeePaymentCreateOrConnectWithoutStudentInput[]
    createMany?: FeePaymentCreateManyStudentInputEnvelope
    connect?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
  }

  export type StudentAcademicHistoryUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentAcademicHistoryCreateWithoutStudentInput, StudentAcademicHistoryUncheckedCreateWithoutStudentInput> | StudentAcademicHistoryCreateWithoutStudentInput[] | StudentAcademicHistoryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentAcademicHistoryCreateOrConnectWithoutStudentInput | StudentAcademicHistoryCreateOrConnectWithoutStudentInput[]
    createMany?: StudentAcademicHistoryCreateManyStudentInputEnvelope
    connect?: StudentAcademicHistoryWhereUniqueInput | StudentAcademicHistoryWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<DocumentCreateWithoutStudentInput, DocumentUncheckedCreateWithoutStudentInput> | DocumentCreateWithoutStudentInput[] | DocumentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutStudentInput | DocumentCreateOrConnectWithoutStudentInput[]
    createMany?: DocumentCreateManyStudentInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type StudentFeeUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentFeeCreateWithoutStudentInput, StudentFeeUncheckedCreateWithoutStudentInput> | StudentFeeCreateWithoutStudentInput[] | StudentFeeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentFeeCreateOrConnectWithoutStudentInput | StudentFeeCreateOrConnectWithoutStudentInput[]
    createMany?: StudentFeeCreateManyStudentInputEnvelope
    connect?: StudentFeeWhereUniqueInput | StudentFeeWhereUniqueInput[]
  }

  export type FeePaymentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<FeePaymentCreateWithoutStudentInput, FeePaymentUncheckedCreateWithoutStudentInput> | FeePaymentCreateWithoutStudentInput[] | FeePaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeePaymentCreateOrConnectWithoutStudentInput | FeePaymentCreateOrConnectWithoutStudentInput[]
    createMany?: FeePaymentCreateManyStudentInputEnvelope
    connect?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
  }

  export type SchoolUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutStudentsInput
    upsert?: SchoolUpsertWithoutStudentsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutStudentsInput, SchoolUpdateWithoutStudentsInput>, SchoolUncheckedUpdateWithoutStudentsInput>
  }

  export type ParentUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<ParentCreateWithoutStudentsInput, ParentUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ParentCreateOrConnectWithoutStudentsInput
    upsert?: ParentUpsertWithoutStudentsInput
    connect?: ParentWhereUniqueInput
    update?: XOR<XOR<ParentUpdateToOneWithWhereWithoutStudentsInput, ParentUpdateWithoutStudentsInput>, ParentUncheckedUpdateWithoutStudentsInput>
  }

  export type RouteUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<RouteCreateWithoutStudentsInput, RouteUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutStudentsInput
    upsert?: RouteUpsertWithoutStudentsInput
    disconnect?: RouteWhereInput | boolean
    delete?: RouteWhereInput | boolean
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutStudentsInput, RouteUpdateWithoutStudentsInput>, RouteUncheckedUpdateWithoutStudentsInput>
  }

  export type StudentAcademicHistoryUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentAcademicHistoryCreateWithoutStudentInput, StudentAcademicHistoryUncheckedCreateWithoutStudentInput> | StudentAcademicHistoryCreateWithoutStudentInput[] | StudentAcademicHistoryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentAcademicHistoryCreateOrConnectWithoutStudentInput | StudentAcademicHistoryCreateOrConnectWithoutStudentInput[]
    upsert?: StudentAcademicHistoryUpsertWithWhereUniqueWithoutStudentInput | StudentAcademicHistoryUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentAcademicHistoryCreateManyStudentInputEnvelope
    set?: StudentAcademicHistoryWhereUniqueInput | StudentAcademicHistoryWhereUniqueInput[]
    disconnect?: StudentAcademicHistoryWhereUniqueInput | StudentAcademicHistoryWhereUniqueInput[]
    delete?: StudentAcademicHistoryWhereUniqueInput | StudentAcademicHistoryWhereUniqueInput[]
    connect?: StudentAcademicHistoryWhereUniqueInput | StudentAcademicHistoryWhereUniqueInput[]
    update?: StudentAcademicHistoryUpdateWithWhereUniqueWithoutStudentInput | StudentAcademicHistoryUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentAcademicHistoryUpdateManyWithWhereWithoutStudentInput | StudentAcademicHistoryUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentAcademicHistoryScalarWhereInput | StudentAcademicHistoryScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<DocumentCreateWithoutStudentInput, DocumentUncheckedCreateWithoutStudentInput> | DocumentCreateWithoutStudentInput[] | DocumentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutStudentInput | DocumentCreateOrConnectWithoutStudentInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutStudentInput | DocumentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: DocumentCreateManyStudentInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutStudentInput | DocumentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutStudentInput | DocumentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type StudentFeeUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentFeeCreateWithoutStudentInput, StudentFeeUncheckedCreateWithoutStudentInput> | StudentFeeCreateWithoutStudentInput[] | StudentFeeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentFeeCreateOrConnectWithoutStudentInput | StudentFeeCreateOrConnectWithoutStudentInput[]
    upsert?: StudentFeeUpsertWithWhereUniqueWithoutStudentInput | StudentFeeUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentFeeCreateManyStudentInputEnvelope
    set?: StudentFeeWhereUniqueInput | StudentFeeWhereUniqueInput[]
    disconnect?: StudentFeeWhereUniqueInput | StudentFeeWhereUniqueInput[]
    delete?: StudentFeeWhereUniqueInput | StudentFeeWhereUniqueInput[]
    connect?: StudentFeeWhereUniqueInput | StudentFeeWhereUniqueInput[]
    update?: StudentFeeUpdateWithWhereUniqueWithoutStudentInput | StudentFeeUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentFeeUpdateManyWithWhereWithoutStudentInput | StudentFeeUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentFeeScalarWhereInput | StudentFeeScalarWhereInput[]
  }

  export type FeePaymentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<FeePaymentCreateWithoutStudentInput, FeePaymentUncheckedCreateWithoutStudentInput> | FeePaymentCreateWithoutStudentInput[] | FeePaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeePaymentCreateOrConnectWithoutStudentInput | FeePaymentCreateOrConnectWithoutStudentInput[]
    upsert?: FeePaymentUpsertWithWhereUniqueWithoutStudentInput | FeePaymentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: FeePaymentCreateManyStudentInputEnvelope
    set?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    disconnect?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    delete?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    connect?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    update?: FeePaymentUpdateWithWhereUniqueWithoutStudentInput | FeePaymentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: FeePaymentUpdateManyWithWhereWithoutStudentInput | FeePaymentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: FeePaymentScalarWhereInput | FeePaymentScalarWhereInput[]
  }

  export type StudentAcademicHistoryUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentAcademicHistoryCreateWithoutStudentInput, StudentAcademicHistoryUncheckedCreateWithoutStudentInput> | StudentAcademicHistoryCreateWithoutStudentInput[] | StudentAcademicHistoryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentAcademicHistoryCreateOrConnectWithoutStudentInput | StudentAcademicHistoryCreateOrConnectWithoutStudentInput[]
    upsert?: StudentAcademicHistoryUpsertWithWhereUniqueWithoutStudentInput | StudentAcademicHistoryUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentAcademicHistoryCreateManyStudentInputEnvelope
    set?: StudentAcademicHistoryWhereUniqueInput | StudentAcademicHistoryWhereUniqueInput[]
    disconnect?: StudentAcademicHistoryWhereUniqueInput | StudentAcademicHistoryWhereUniqueInput[]
    delete?: StudentAcademicHistoryWhereUniqueInput | StudentAcademicHistoryWhereUniqueInput[]
    connect?: StudentAcademicHistoryWhereUniqueInput | StudentAcademicHistoryWhereUniqueInput[]
    update?: StudentAcademicHistoryUpdateWithWhereUniqueWithoutStudentInput | StudentAcademicHistoryUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentAcademicHistoryUpdateManyWithWhereWithoutStudentInput | StudentAcademicHistoryUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentAcademicHistoryScalarWhereInput | StudentAcademicHistoryScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<DocumentCreateWithoutStudentInput, DocumentUncheckedCreateWithoutStudentInput> | DocumentCreateWithoutStudentInput[] | DocumentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutStudentInput | DocumentCreateOrConnectWithoutStudentInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutStudentInput | DocumentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: DocumentCreateManyStudentInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutStudentInput | DocumentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutStudentInput | DocumentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type StudentFeeUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentFeeCreateWithoutStudentInput, StudentFeeUncheckedCreateWithoutStudentInput> | StudentFeeCreateWithoutStudentInput[] | StudentFeeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentFeeCreateOrConnectWithoutStudentInput | StudentFeeCreateOrConnectWithoutStudentInput[]
    upsert?: StudentFeeUpsertWithWhereUniqueWithoutStudentInput | StudentFeeUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentFeeCreateManyStudentInputEnvelope
    set?: StudentFeeWhereUniqueInput | StudentFeeWhereUniqueInput[]
    disconnect?: StudentFeeWhereUniqueInput | StudentFeeWhereUniqueInput[]
    delete?: StudentFeeWhereUniqueInput | StudentFeeWhereUniqueInput[]
    connect?: StudentFeeWhereUniqueInput | StudentFeeWhereUniqueInput[]
    update?: StudentFeeUpdateWithWhereUniqueWithoutStudentInput | StudentFeeUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentFeeUpdateManyWithWhereWithoutStudentInput | StudentFeeUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentFeeScalarWhereInput | StudentFeeScalarWhereInput[]
  }

  export type FeePaymentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<FeePaymentCreateWithoutStudentInput, FeePaymentUncheckedCreateWithoutStudentInput> | FeePaymentCreateWithoutStudentInput[] | FeePaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeePaymentCreateOrConnectWithoutStudentInput | FeePaymentCreateOrConnectWithoutStudentInput[]
    upsert?: FeePaymentUpsertWithWhereUniqueWithoutStudentInput | FeePaymentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: FeePaymentCreateManyStudentInputEnvelope
    set?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    disconnect?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    delete?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    connect?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    update?: FeePaymentUpdateWithWhereUniqueWithoutStudentInput | FeePaymentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: FeePaymentUpdateManyWithWhereWithoutStudentInput | FeePaymentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: FeePaymentScalarWhereInput | FeePaymentScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutAcademicHistoryInput = {
    create?: XOR<StudentCreateWithoutAcademicHistoryInput, StudentUncheckedCreateWithoutAcademicHistoryInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAcademicHistoryInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutAcademicHistoryNestedInput = {
    create?: XOR<StudentCreateWithoutAcademicHistoryInput, StudentUncheckedCreateWithoutAcademicHistoryInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAcademicHistoryInput
    upsert?: StudentUpsertWithoutAcademicHistoryInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAcademicHistoryInput, StudentUpdateWithoutAcademicHistoryInput>, StudentUncheckedUpdateWithoutAcademicHistoryInput>
  }

  export type SchoolCreateNestedOneWithoutParentsInput = {
    create?: XOR<SchoolCreateWithoutParentsInput, SchoolUncheckedCreateWithoutParentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutParentsInput
    connect?: SchoolWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutParentInput = {
    create?: XOR<StudentCreateWithoutParentInput, StudentUncheckedCreateWithoutParentInput> | StudentCreateWithoutParentInput[] | StudentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutParentInput | StudentCreateOrConnectWithoutParentInput[]
    createMany?: StudentCreateManyParentInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<StudentCreateWithoutParentInput, StudentUncheckedCreateWithoutParentInput> | StudentCreateWithoutParentInput[] | StudentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutParentInput | StudentCreateOrConnectWithoutParentInput[]
    createMany?: StudentCreateManyParentInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type SchoolUpdateOneRequiredWithoutParentsNestedInput = {
    create?: XOR<SchoolCreateWithoutParentsInput, SchoolUncheckedCreateWithoutParentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutParentsInput
    upsert?: SchoolUpsertWithoutParentsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutParentsInput, SchoolUpdateWithoutParentsInput>, SchoolUncheckedUpdateWithoutParentsInput>
  }

  export type StudentUpdateManyWithoutParentNestedInput = {
    create?: XOR<StudentCreateWithoutParentInput, StudentUncheckedCreateWithoutParentInput> | StudentCreateWithoutParentInput[] | StudentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutParentInput | StudentCreateOrConnectWithoutParentInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutParentInput | StudentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: StudentCreateManyParentInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutParentInput | StudentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutParentInput | StudentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<StudentCreateWithoutParentInput, StudentUncheckedCreateWithoutParentInput> | StudentCreateWithoutParentInput[] | StudentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutParentInput | StudentCreateOrConnectWithoutParentInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutParentInput | StudentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: StudentCreateManyParentInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutParentInput | StudentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutParentInput | StudentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<StudentCreateWithoutDocumentsInput, StudentUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutDocumentsInput
    connect?: StudentWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StudentUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<StudentCreateWithoutDocumentsInput, StudentUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutDocumentsInput
    upsert?: StudentUpsertWithoutDocumentsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutDocumentsInput, StudentUpdateWithoutDocumentsInput>, StudentUncheckedUpdateWithoutDocumentsInput>
  }

  export type SchoolCreateNestedOneWithoutFeeStructuresInput = {
    create?: XOR<SchoolCreateWithoutFeeStructuresInput, SchoolUncheckedCreateWithoutFeeStructuresInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutFeeStructuresInput
    connect?: SchoolWhereUniqueInput
  }

  export type SchoolUpdateOneRequiredWithoutFeeStructuresNestedInput = {
    create?: XOR<SchoolCreateWithoutFeeStructuresInput, SchoolUncheckedCreateWithoutFeeStructuresInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutFeeStructuresInput
    upsert?: SchoolUpsertWithoutFeeStructuresInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutFeeStructuresInput, SchoolUpdateWithoutFeeStructuresInput>, SchoolUncheckedUpdateWithoutFeeStructuresInput>
  }

  export type StudentCreateNestedOneWithoutStudentFeesInput = {
    create?: XOR<StudentCreateWithoutStudentFeesInput, StudentUncheckedCreateWithoutStudentFeesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentFeesInput
    connect?: StudentWhereUniqueInput
  }

  export type FeeInstallmentCreateNestedManyWithoutStudentFeeInput = {
    create?: XOR<FeeInstallmentCreateWithoutStudentFeeInput, FeeInstallmentUncheckedCreateWithoutStudentFeeInput> | FeeInstallmentCreateWithoutStudentFeeInput[] | FeeInstallmentUncheckedCreateWithoutStudentFeeInput[]
    connectOrCreate?: FeeInstallmentCreateOrConnectWithoutStudentFeeInput | FeeInstallmentCreateOrConnectWithoutStudentFeeInput[]
    createMany?: FeeInstallmentCreateManyStudentFeeInputEnvelope
    connect?: FeeInstallmentWhereUniqueInput | FeeInstallmentWhereUniqueInput[]
  }

  export type FeeInstallmentUncheckedCreateNestedManyWithoutStudentFeeInput = {
    create?: XOR<FeeInstallmentCreateWithoutStudentFeeInput, FeeInstallmentUncheckedCreateWithoutStudentFeeInput> | FeeInstallmentCreateWithoutStudentFeeInput[] | FeeInstallmentUncheckedCreateWithoutStudentFeeInput[]
    connectOrCreate?: FeeInstallmentCreateOrConnectWithoutStudentFeeInput | FeeInstallmentCreateOrConnectWithoutStudentFeeInput[]
    createMany?: FeeInstallmentCreateManyStudentFeeInputEnvelope
    connect?: FeeInstallmentWhereUniqueInput | FeeInstallmentWhereUniqueInput[]
  }

  export type StudentUpdateOneRequiredWithoutStudentFeesNestedInput = {
    create?: XOR<StudentCreateWithoutStudentFeesInput, StudentUncheckedCreateWithoutStudentFeesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentFeesInput
    upsert?: StudentUpsertWithoutStudentFeesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutStudentFeesInput, StudentUpdateWithoutStudentFeesInput>, StudentUncheckedUpdateWithoutStudentFeesInput>
  }

  export type FeeInstallmentUpdateManyWithoutStudentFeeNestedInput = {
    create?: XOR<FeeInstallmentCreateWithoutStudentFeeInput, FeeInstallmentUncheckedCreateWithoutStudentFeeInput> | FeeInstallmentCreateWithoutStudentFeeInput[] | FeeInstallmentUncheckedCreateWithoutStudentFeeInput[]
    connectOrCreate?: FeeInstallmentCreateOrConnectWithoutStudentFeeInput | FeeInstallmentCreateOrConnectWithoutStudentFeeInput[]
    upsert?: FeeInstallmentUpsertWithWhereUniqueWithoutStudentFeeInput | FeeInstallmentUpsertWithWhereUniqueWithoutStudentFeeInput[]
    createMany?: FeeInstallmentCreateManyStudentFeeInputEnvelope
    set?: FeeInstallmentWhereUniqueInput | FeeInstallmentWhereUniqueInput[]
    disconnect?: FeeInstallmentWhereUniqueInput | FeeInstallmentWhereUniqueInput[]
    delete?: FeeInstallmentWhereUniqueInput | FeeInstallmentWhereUniqueInput[]
    connect?: FeeInstallmentWhereUniqueInput | FeeInstallmentWhereUniqueInput[]
    update?: FeeInstallmentUpdateWithWhereUniqueWithoutStudentFeeInput | FeeInstallmentUpdateWithWhereUniqueWithoutStudentFeeInput[]
    updateMany?: FeeInstallmentUpdateManyWithWhereWithoutStudentFeeInput | FeeInstallmentUpdateManyWithWhereWithoutStudentFeeInput[]
    deleteMany?: FeeInstallmentScalarWhereInput | FeeInstallmentScalarWhereInput[]
  }

  export type FeeInstallmentUncheckedUpdateManyWithoutStudentFeeNestedInput = {
    create?: XOR<FeeInstallmentCreateWithoutStudentFeeInput, FeeInstallmentUncheckedCreateWithoutStudentFeeInput> | FeeInstallmentCreateWithoutStudentFeeInput[] | FeeInstallmentUncheckedCreateWithoutStudentFeeInput[]
    connectOrCreate?: FeeInstallmentCreateOrConnectWithoutStudentFeeInput | FeeInstallmentCreateOrConnectWithoutStudentFeeInput[]
    upsert?: FeeInstallmentUpsertWithWhereUniqueWithoutStudentFeeInput | FeeInstallmentUpsertWithWhereUniqueWithoutStudentFeeInput[]
    createMany?: FeeInstallmentCreateManyStudentFeeInputEnvelope
    set?: FeeInstallmentWhereUniqueInput | FeeInstallmentWhereUniqueInput[]
    disconnect?: FeeInstallmentWhereUniqueInput | FeeInstallmentWhereUniqueInput[]
    delete?: FeeInstallmentWhereUniqueInput | FeeInstallmentWhereUniqueInput[]
    connect?: FeeInstallmentWhereUniqueInput | FeeInstallmentWhereUniqueInput[]
    update?: FeeInstallmentUpdateWithWhereUniqueWithoutStudentFeeInput | FeeInstallmentUpdateWithWhereUniqueWithoutStudentFeeInput[]
    updateMany?: FeeInstallmentUpdateManyWithWhereWithoutStudentFeeInput | FeeInstallmentUpdateManyWithWhereWithoutStudentFeeInput[]
    deleteMany?: FeeInstallmentScalarWhereInput | FeeInstallmentScalarWhereInput[]
  }

  export type StudentFeeCreateNestedOneWithoutInstallmentsInput = {
    create?: XOR<StudentFeeCreateWithoutInstallmentsInput, StudentFeeUncheckedCreateWithoutInstallmentsInput>
    connectOrCreate?: StudentFeeCreateOrConnectWithoutInstallmentsInput
    connect?: StudentFeeWhereUniqueInput
  }

  export type FeePaymentCreateNestedManyWithoutInstallmentInput = {
    create?: XOR<FeePaymentCreateWithoutInstallmentInput, FeePaymentUncheckedCreateWithoutInstallmentInput> | FeePaymentCreateWithoutInstallmentInput[] | FeePaymentUncheckedCreateWithoutInstallmentInput[]
    connectOrCreate?: FeePaymentCreateOrConnectWithoutInstallmentInput | FeePaymentCreateOrConnectWithoutInstallmentInput[]
    createMany?: FeePaymentCreateManyInstallmentInputEnvelope
    connect?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
  }

  export type FeePaymentUncheckedCreateNestedManyWithoutInstallmentInput = {
    create?: XOR<FeePaymentCreateWithoutInstallmentInput, FeePaymentUncheckedCreateWithoutInstallmentInput> | FeePaymentCreateWithoutInstallmentInput[] | FeePaymentUncheckedCreateWithoutInstallmentInput[]
    connectOrCreate?: FeePaymentCreateOrConnectWithoutInstallmentInput | FeePaymentCreateOrConnectWithoutInstallmentInput[]
    createMany?: FeePaymentCreateManyInstallmentInputEnvelope
    connect?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
  }

  export type StudentFeeUpdateOneRequiredWithoutInstallmentsNestedInput = {
    create?: XOR<StudentFeeCreateWithoutInstallmentsInput, StudentFeeUncheckedCreateWithoutInstallmentsInput>
    connectOrCreate?: StudentFeeCreateOrConnectWithoutInstallmentsInput
    upsert?: StudentFeeUpsertWithoutInstallmentsInput
    connect?: StudentFeeWhereUniqueInput
    update?: XOR<XOR<StudentFeeUpdateToOneWithWhereWithoutInstallmentsInput, StudentFeeUpdateWithoutInstallmentsInput>, StudentFeeUncheckedUpdateWithoutInstallmentsInput>
  }

  export type FeePaymentUpdateManyWithoutInstallmentNestedInput = {
    create?: XOR<FeePaymentCreateWithoutInstallmentInput, FeePaymentUncheckedCreateWithoutInstallmentInput> | FeePaymentCreateWithoutInstallmentInput[] | FeePaymentUncheckedCreateWithoutInstallmentInput[]
    connectOrCreate?: FeePaymentCreateOrConnectWithoutInstallmentInput | FeePaymentCreateOrConnectWithoutInstallmentInput[]
    upsert?: FeePaymentUpsertWithWhereUniqueWithoutInstallmentInput | FeePaymentUpsertWithWhereUniqueWithoutInstallmentInput[]
    createMany?: FeePaymentCreateManyInstallmentInputEnvelope
    set?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    disconnect?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    delete?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    connect?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    update?: FeePaymentUpdateWithWhereUniqueWithoutInstallmentInput | FeePaymentUpdateWithWhereUniqueWithoutInstallmentInput[]
    updateMany?: FeePaymentUpdateManyWithWhereWithoutInstallmentInput | FeePaymentUpdateManyWithWhereWithoutInstallmentInput[]
    deleteMany?: FeePaymentScalarWhereInput | FeePaymentScalarWhereInput[]
  }

  export type FeePaymentUncheckedUpdateManyWithoutInstallmentNestedInput = {
    create?: XOR<FeePaymentCreateWithoutInstallmentInput, FeePaymentUncheckedCreateWithoutInstallmentInput> | FeePaymentCreateWithoutInstallmentInput[] | FeePaymentUncheckedCreateWithoutInstallmentInput[]
    connectOrCreate?: FeePaymentCreateOrConnectWithoutInstallmentInput | FeePaymentCreateOrConnectWithoutInstallmentInput[]
    upsert?: FeePaymentUpsertWithWhereUniqueWithoutInstallmentInput | FeePaymentUpsertWithWhereUniqueWithoutInstallmentInput[]
    createMany?: FeePaymentCreateManyInstallmentInputEnvelope
    set?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    disconnect?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    delete?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    connect?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    update?: FeePaymentUpdateWithWhereUniqueWithoutInstallmentInput | FeePaymentUpdateWithWhereUniqueWithoutInstallmentInput[]
    updateMany?: FeePaymentUpdateManyWithWhereWithoutInstallmentInput | FeePaymentUpdateManyWithWhereWithoutInstallmentInput[]
    deleteMany?: FeePaymentScalarWhereInput | FeePaymentScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutFeePaymentsInput = {
    create?: XOR<StudentCreateWithoutFeePaymentsInput, StudentUncheckedCreateWithoutFeePaymentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutFeePaymentsInput
    connect?: StudentWhereUniqueInput
  }

  export type FeeInstallmentCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<FeeInstallmentCreateWithoutPaymentsInput, FeeInstallmentUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: FeeInstallmentCreateOrConnectWithoutPaymentsInput
    connect?: FeeInstallmentWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutFeePaymentsNestedInput = {
    create?: XOR<StudentCreateWithoutFeePaymentsInput, StudentUncheckedCreateWithoutFeePaymentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutFeePaymentsInput
    upsert?: StudentUpsertWithoutFeePaymentsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutFeePaymentsInput, StudentUpdateWithoutFeePaymentsInput>, StudentUncheckedUpdateWithoutFeePaymentsInput>
  }

  export type FeeInstallmentUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<FeeInstallmentCreateWithoutPaymentsInput, FeeInstallmentUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: FeeInstallmentCreateOrConnectWithoutPaymentsInput
    upsert?: FeeInstallmentUpsertWithoutPaymentsInput
    disconnect?: FeeInstallmentWhereInput | boolean
    delete?: FeeInstallmentWhereInput | boolean
    connect?: FeeInstallmentWhereUniqueInput
    update?: XOR<XOR<FeeInstallmentUpdateToOneWithWhereWithoutPaymentsInput, FeeInstallmentUpdateWithoutPaymentsInput>, FeeInstallmentUncheckedUpdateWithoutPaymentsInput>
  }

  export type RouteCreatestopsInput = {
    set: string[]
  }

  export type SchoolCreateNestedOneWithoutRoutesInput = {
    create?: XOR<SchoolCreateWithoutRoutesInput, SchoolUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutRoutesInput
    connect?: SchoolWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutRouteInput = {
    create?: XOR<StudentCreateWithoutRouteInput, StudentUncheckedCreateWithoutRouteInput> | StudentCreateWithoutRouteInput[] | StudentUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutRouteInput | StudentCreateOrConnectWithoutRouteInput[]
    createMany?: StudentCreateManyRouteInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<StudentCreateWithoutRouteInput, StudentUncheckedCreateWithoutRouteInput> | StudentCreateWithoutRouteInput[] | StudentUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutRouteInput | StudentCreateOrConnectWithoutRouteInput[]
    createMany?: StudentCreateManyRouteInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type RouteUpdatestopsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SchoolUpdateOneRequiredWithoutRoutesNestedInput = {
    create?: XOR<SchoolCreateWithoutRoutesInput, SchoolUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutRoutesInput
    upsert?: SchoolUpsertWithoutRoutesInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutRoutesInput, SchoolUpdateWithoutRoutesInput>, SchoolUncheckedUpdateWithoutRoutesInput>
  }

  export type StudentUpdateManyWithoutRouteNestedInput = {
    create?: XOR<StudentCreateWithoutRouteInput, StudentUncheckedCreateWithoutRouteInput> | StudentCreateWithoutRouteInput[] | StudentUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutRouteInput | StudentCreateOrConnectWithoutRouteInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutRouteInput | StudentUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: StudentCreateManyRouteInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutRouteInput | StudentUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutRouteInput | StudentUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<StudentCreateWithoutRouteInput, StudentUncheckedCreateWithoutRouteInput> | StudentCreateWithoutRouteInput[] | StudentUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutRouteInput | StudentCreateOrConnectWithoutRouteInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutRouteInput | StudentUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: StudentCreateManyRouteInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutRouteInput | StudentUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutRouteInput | StudentUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StudentCreateWithoutSchoolInput = {
    id?: string
    studentId: string
    admissionNumber: string
    qrCodeValue: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth: Date | string
    gender: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    photoUrl?: string | null
    parentPrimaryMobile: string
    parentAlternateMobile?: string | null
    parentEmail?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    admissionDate: Date | string
    previousSchoolId?: string | null
    usesTransport?: boolean
    pickupPoint?: string | null
    dropPoint?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent: ParentCreateNestedOneWithoutStudentsInput
    route?: RouteCreateNestedOneWithoutStudentsInput
    academicHistory?: StudentAcademicHistoryCreateNestedManyWithoutStudentInput
    documents?: DocumentCreateNestedManyWithoutStudentInput
    studentFees?: StudentFeeCreateNestedManyWithoutStudentInput
    feePayments?: FeePaymentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSchoolInput = {
    id?: string
    studentId: string
    admissionNumber: string
    qrCodeValue: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth: Date | string
    gender: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    photoUrl?: string | null
    parentPrimaryMobile: string
    parentAlternateMobile?: string | null
    parentEmail?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    admissionDate: Date | string
    previousSchoolId?: string | null
    usesTransport?: boolean
    transportRouteId?: string | null
    pickupPoint?: string | null
    dropPoint?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId: string
    academicHistory?: StudentAcademicHistoryUncheckedCreateNestedManyWithoutStudentInput
    documents?: DocumentUncheckedCreateNestedManyWithoutStudentInput
    studentFees?: StudentFeeUncheckedCreateNestedManyWithoutStudentInput
    feePayments?: FeePaymentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSchoolInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput>
  }

  export type StudentCreateManySchoolInputEnvelope = {
    data: StudentCreateManySchoolInput | StudentCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type ParentCreateWithoutSchoolInput = {
    id?: string
    fatherName: string
    fatherOccupation?: string | null
    fatherMobile: string
    fatherEmail?: string | null
    fatherAadhar?: string | null
    motherName: string
    motherOccupation?: string | null
    motherMobile: string
    motherEmail?: string | null
    motherAadhar?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    guardianMobile?: string | null
    guardianEmail?: string | null
    primaryContact?: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutSchoolInput = {
    id?: string
    fatherName: string
    fatherOccupation?: string | null
    fatherMobile: string
    fatherEmail?: string | null
    fatherAadhar?: string | null
    motherName: string
    motherOccupation?: string | null
    motherMobile: string
    motherEmail?: string | null
    motherAadhar?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    guardianMobile?: string | null
    guardianEmail?: string | null
    primaryContact?: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutSchoolInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutSchoolInput, ParentUncheckedCreateWithoutSchoolInput>
  }

  export type ParentCreateManySchoolInputEnvelope = {
    data: ParentCreateManySchoolInput | ParentCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type FeeStructureCreateWithoutSchoolInput = {
    id?: string
    class: string
    academicYear: string
    tuitionFeeMonthly: number
    transportFeeMonthly?: number
    examFeeYearly?: number
    admissionFee?: number
    booksFee?: number
    idCardFee?: number
    activityFee?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeeStructureUncheckedCreateWithoutSchoolInput = {
    id?: string
    class: string
    academicYear: string
    tuitionFeeMonthly: number
    transportFeeMonthly?: number
    examFeeYearly?: number
    admissionFee?: number
    booksFee?: number
    idCardFee?: number
    activityFee?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeeStructureCreateOrConnectWithoutSchoolInput = {
    where: FeeStructureWhereUniqueInput
    create: XOR<FeeStructureCreateWithoutSchoolInput, FeeStructureUncheckedCreateWithoutSchoolInput>
  }

  export type FeeStructureCreateManySchoolInputEnvelope = {
    data: FeeStructureCreateManySchoolInput | FeeStructureCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type RouteCreateWithoutSchoolInput = {
    id?: string
    routeName: string
    stops?: RouteCreatestopsInput | string[]
    vehicleNumber: string
    driverName: string
    driverMobile: string
    capacity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutSchoolInput = {
    id?: string
    routeName: string
    stops?: RouteCreatestopsInput | string[]
    vehicleNumber: string
    driverName: string
    driverMobile: string
    capacity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutSchoolInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutSchoolInput, RouteUncheckedCreateWithoutSchoolInput>
  }

  export type RouteCreateManySchoolInputEnvelope = {
    data: RouteCreateManySchoolInput | RouteCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithWhereUniqueWithoutSchoolInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutSchoolInput, StudentUncheckedUpdateWithoutSchoolInput>
    create: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutSchoolInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutSchoolInput, StudentUncheckedUpdateWithoutSchoolInput>
  }

  export type StudentUpdateManyWithWhereWithoutSchoolInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutSchoolInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: StringFilter<"Student"> | string
    studentId?: StringFilter<"Student"> | string
    admissionNumber?: StringFilter<"Student"> | string
    qrCodeValue?: StringFilter<"Student"> | string
    firstName?: StringFilter<"Student"> | string
    middleName?: StringNullableFilter<"Student"> | string | null
    lastName?: StringFilter<"Student"> | string
    dateOfBirth?: DateTimeFilter<"Student"> | Date | string
    gender?: StringFilter<"Student"> | string
    bloodGroup?: StringNullableFilter<"Student"> | string | null
    aadharNumber?: StringNullableFilter<"Student"> | string | null
    photoUrl?: StringNullableFilter<"Student"> | string | null
    parentPrimaryMobile?: StringFilter<"Student"> | string
    parentAlternateMobile?: StringNullableFilter<"Student"> | string | null
    parentEmail?: StringNullableFilter<"Student"> | string | null
    emergencyContactName?: StringNullableFilter<"Student"> | string | null
    emergencyContactPhone?: StringNullableFilter<"Student"> | string | null
    addressLine1?: StringFilter<"Student"> | string
    addressLine2?: StringNullableFilter<"Student"> | string | null
    city?: StringFilter<"Student"> | string
    state?: StringFilter<"Student"> | string
    pinCode?: StringFilter<"Student"> | string
    country?: StringFilter<"Student"> | string
    admissionDate?: DateTimeFilter<"Student"> | Date | string
    previousSchoolId?: StringNullableFilter<"Student"> | string | null
    usesTransport?: BoolFilter<"Student"> | boolean
    transportRouteId?: StringNullableFilter<"Student"> | string | null
    pickupPoint?: StringNullableFilter<"Student"> | string | null
    dropPoint?: StringNullableFilter<"Student"> | string | null
    status?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    schoolId?: StringFilter<"Student"> | string
    parentId?: StringFilter<"Student"> | string
  }

  export type ParentUpsertWithWhereUniqueWithoutSchoolInput = {
    where: ParentWhereUniqueInput
    update: XOR<ParentUpdateWithoutSchoolInput, ParentUncheckedUpdateWithoutSchoolInput>
    create: XOR<ParentCreateWithoutSchoolInput, ParentUncheckedCreateWithoutSchoolInput>
  }

  export type ParentUpdateWithWhereUniqueWithoutSchoolInput = {
    where: ParentWhereUniqueInput
    data: XOR<ParentUpdateWithoutSchoolInput, ParentUncheckedUpdateWithoutSchoolInput>
  }

  export type ParentUpdateManyWithWhereWithoutSchoolInput = {
    where: ParentScalarWhereInput
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyWithoutSchoolInput>
  }

  export type ParentScalarWhereInput = {
    AND?: ParentScalarWhereInput | ParentScalarWhereInput[]
    OR?: ParentScalarWhereInput[]
    NOT?: ParentScalarWhereInput | ParentScalarWhereInput[]
    id?: StringFilter<"Parent"> | string
    fatherName?: StringFilter<"Parent"> | string
    fatherOccupation?: StringNullableFilter<"Parent"> | string | null
    fatherMobile?: StringFilter<"Parent"> | string
    fatherEmail?: StringNullableFilter<"Parent"> | string | null
    fatherAadhar?: StringNullableFilter<"Parent"> | string | null
    motherName?: StringFilter<"Parent"> | string
    motherOccupation?: StringNullableFilter<"Parent"> | string | null
    motherMobile?: StringFilter<"Parent"> | string
    motherEmail?: StringNullableFilter<"Parent"> | string | null
    motherAadhar?: StringNullableFilter<"Parent"> | string | null
    guardianName?: StringNullableFilter<"Parent"> | string | null
    guardianRelation?: StringNullableFilter<"Parent"> | string | null
    guardianMobile?: StringNullableFilter<"Parent"> | string | null
    guardianEmail?: StringNullableFilter<"Parent"> | string | null
    primaryContact?: StringFilter<"Parent"> | string
    addressLine1?: StringFilter<"Parent"> | string
    addressLine2?: StringNullableFilter<"Parent"> | string | null
    city?: StringFilter<"Parent"> | string
    state?: StringFilter<"Parent"> | string
    pinCode?: StringFilter<"Parent"> | string
    country?: StringFilter<"Parent"> | string
    createdAt?: DateTimeFilter<"Parent"> | Date | string
    updatedAt?: DateTimeFilter<"Parent"> | Date | string
    schoolId?: StringFilter<"Parent"> | string
  }

  export type FeeStructureUpsertWithWhereUniqueWithoutSchoolInput = {
    where: FeeStructureWhereUniqueInput
    update: XOR<FeeStructureUpdateWithoutSchoolInput, FeeStructureUncheckedUpdateWithoutSchoolInput>
    create: XOR<FeeStructureCreateWithoutSchoolInput, FeeStructureUncheckedCreateWithoutSchoolInput>
  }

  export type FeeStructureUpdateWithWhereUniqueWithoutSchoolInput = {
    where: FeeStructureWhereUniqueInput
    data: XOR<FeeStructureUpdateWithoutSchoolInput, FeeStructureUncheckedUpdateWithoutSchoolInput>
  }

  export type FeeStructureUpdateManyWithWhereWithoutSchoolInput = {
    where: FeeStructureScalarWhereInput
    data: XOR<FeeStructureUpdateManyMutationInput, FeeStructureUncheckedUpdateManyWithoutSchoolInput>
  }

  export type FeeStructureScalarWhereInput = {
    AND?: FeeStructureScalarWhereInput | FeeStructureScalarWhereInput[]
    OR?: FeeStructureScalarWhereInput[]
    NOT?: FeeStructureScalarWhereInput | FeeStructureScalarWhereInput[]
    id?: StringFilter<"FeeStructure"> | string
    class?: StringFilter<"FeeStructure"> | string
    academicYear?: StringFilter<"FeeStructure"> | string
    tuitionFeeMonthly?: IntFilter<"FeeStructure"> | number
    transportFeeMonthly?: IntFilter<"FeeStructure"> | number
    examFeeYearly?: IntFilter<"FeeStructure"> | number
    admissionFee?: IntFilter<"FeeStructure"> | number
    booksFee?: IntFilter<"FeeStructure"> | number
    idCardFee?: IntFilter<"FeeStructure"> | number
    activityFee?: IntFilter<"FeeStructure"> | number
    createdAt?: DateTimeFilter<"FeeStructure"> | Date | string
    updatedAt?: DateTimeFilter<"FeeStructure"> | Date | string
    schoolId?: StringFilter<"FeeStructure"> | string
  }

  export type RouteUpsertWithWhereUniqueWithoutSchoolInput = {
    where: RouteWhereUniqueInput
    update: XOR<RouteUpdateWithoutSchoolInput, RouteUncheckedUpdateWithoutSchoolInput>
    create: XOR<RouteCreateWithoutSchoolInput, RouteUncheckedCreateWithoutSchoolInput>
  }

  export type RouteUpdateWithWhereUniqueWithoutSchoolInput = {
    where: RouteWhereUniqueInput
    data: XOR<RouteUpdateWithoutSchoolInput, RouteUncheckedUpdateWithoutSchoolInput>
  }

  export type RouteUpdateManyWithWhereWithoutSchoolInput = {
    where: RouteScalarWhereInput
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyWithoutSchoolInput>
  }

  export type RouteScalarWhereInput = {
    AND?: RouteScalarWhereInput | RouteScalarWhereInput[]
    OR?: RouteScalarWhereInput[]
    NOT?: RouteScalarWhereInput | RouteScalarWhereInput[]
    id?: StringFilter<"Route"> | string
    routeName?: StringFilter<"Route"> | string
    stops?: StringNullableListFilter<"Route">
    vehicleNumber?: StringFilter<"Route"> | string
    driverName?: StringFilter<"Route"> | string
    driverMobile?: StringFilter<"Route"> | string
    capacity?: IntFilter<"Route"> | number
    isActive?: BoolFilter<"Route"> | boolean
    createdAt?: DateTimeFilter<"Route"> | Date | string
    updatedAt?: DateTimeFilter<"Route"> | Date | string
    schoolId?: StringFilter<"Route"> | string
  }

  export type SchoolCreateWithoutStudentsInput = {
    id?: string
    schoolName: string
    schoolType: string
    boardAffiliation: string
    establishmentYear: string
    schoolCode: string
    udiseCode?: string | null
    schoolCategory: string
    officialEmail: string
    landlineNumber?: string | null
    mobileNumber: string
    alternativeMobile?: string | null
    website?: string | null
    schoolAddress: string
    city: string
    state: string
    pinCode: string
    country: string
    adminName: string
    adminDesignation: string
    adminEmail: string
    adminPassword: string
    confirmPassword: string
    adminMobile: string
    studentStrength: string
    teachingStaff: string
    nonTeachingStaff: string
    totalClasses: string
    mediumOfInstruction?: SchoolCreatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolCreatestreamsOfferedInput | string[]
    plan: string
    billingCycle: string
    termsAccepted: boolean
    privacyAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentCreateNestedManyWithoutSchoolInput
    feeStructures?: FeeStructureCreateNestedManyWithoutSchoolInput
    routes?: RouteCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutStudentsInput = {
    id?: string
    schoolName: string
    schoolType: string
    boardAffiliation: string
    establishmentYear: string
    schoolCode: string
    udiseCode?: string | null
    schoolCategory: string
    officialEmail: string
    landlineNumber?: string | null
    mobileNumber: string
    alternativeMobile?: string | null
    website?: string | null
    schoolAddress: string
    city: string
    state: string
    pinCode: string
    country: string
    adminName: string
    adminDesignation: string
    adminEmail: string
    adminPassword: string
    confirmPassword: string
    adminMobile: string
    studentStrength: string
    teachingStaff: string
    nonTeachingStaff: string
    totalClasses: string
    mediumOfInstruction?: SchoolCreatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolCreatestreamsOfferedInput | string[]
    plan: string
    billingCycle: string
    termsAccepted: boolean
    privacyAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentUncheckedCreateNestedManyWithoutSchoolInput
    feeStructures?: FeeStructureUncheckedCreateNestedManyWithoutSchoolInput
    routes?: RouteUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutStudentsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
  }

  export type ParentCreateWithoutStudentsInput = {
    id?: string
    fatherName: string
    fatherOccupation?: string | null
    fatherMobile: string
    fatherEmail?: string | null
    fatherAadhar?: string | null
    motherName: string
    motherOccupation?: string | null
    motherMobile: string
    motherEmail?: string | null
    motherAadhar?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    guardianMobile?: string | null
    guardianEmail?: string | null
    primaryContact?: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutParentsInput
  }

  export type ParentUncheckedCreateWithoutStudentsInput = {
    id?: string
    fatherName: string
    fatherOccupation?: string | null
    fatherMobile: string
    fatherEmail?: string | null
    fatherAadhar?: string | null
    motherName: string
    motherOccupation?: string | null
    motherMobile: string
    motherEmail?: string | null
    motherAadhar?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    guardianMobile?: string | null
    guardianEmail?: string | null
    primaryContact?: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
  }

  export type ParentCreateOrConnectWithoutStudentsInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutStudentsInput, ParentUncheckedCreateWithoutStudentsInput>
  }

  export type RouteCreateWithoutStudentsInput = {
    id?: string
    routeName: string
    stops?: RouteCreatestopsInput | string[]
    vehicleNumber: string
    driverName: string
    driverMobile: string
    capacity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutRoutesInput
  }

  export type RouteUncheckedCreateWithoutStudentsInput = {
    id?: string
    routeName: string
    stops?: RouteCreatestopsInput | string[]
    vehicleNumber: string
    driverName: string
    driverMobile: string
    capacity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
  }

  export type RouteCreateOrConnectWithoutStudentsInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutStudentsInput, RouteUncheckedCreateWithoutStudentsInput>
  }

  export type StudentAcademicHistoryCreateWithoutStudentInput = {
    id?: string
    academicYear: string
    class: string
    section: string
    rollNumber: number
    classTeacher?: string | null
    promotionStatus?: string
    attendancePresent?: number
    attendanceAbsent?: number
    finalGrade?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentAcademicHistoryUncheckedCreateWithoutStudentInput = {
    id?: string
    academicYear: string
    class: string
    section: string
    rollNumber: number
    classTeacher?: string | null
    promotionStatus?: string
    attendancePresent?: number
    attendanceAbsent?: number
    finalGrade?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentAcademicHistoryCreateOrConnectWithoutStudentInput = {
    where: StudentAcademicHistoryWhereUniqueInput
    create: XOR<StudentAcademicHistoryCreateWithoutStudentInput, StudentAcademicHistoryUncheckedCreateWithoutStudentInput>
  }

  export type StudentAcademicHistoryCreateManyStudentInputEnvelope = {
    data: StudentAcademicHistoryCreateManyStudentInput | StudentAcademicHistoryCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutStudentInput = {
    id?: string
    documentType: string
    documentUrl: string
    fileName: string
    fileSize: number
    mimeType: string
    verificationStatus?: string
    verifiedBy?: string | null
    verifiedAt?: Date | string | null
    rejectionReason?: string | null
    uploadedAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUncheckedCreateWithoutStudentInput = {
    id?: string
    documentType: string
    documentUrl: string
    fileName: string
    fileSize: number
    mimeType: string
    verificationStatus?: string
    verifiedBy?: string | null
    verifiedAt?: Date | string | null
    rejectionReason?: string | null
    uploadedAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutStudentInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutStudentInput, DocumentUncheckedCreateWithoutStudentInput>
  }

  export type DocumentCreateManyStudentInputEnvelope = {
    data: DocumentCreateManyStudentInput | DocumentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type StudentFeeCreateWithoutStudentInput = {
    id?: string
    academicYear: string
    tuitionFee: number
    transportFee?: number
    examFee?: number
    admissionFee?: number
    otherFees?: number
    discountPercentage?: number
    discountAmount?: number
    specialCharges?: number
    totalFee: number
    totalPayable: number
    totalPaid?: number
    totalPending: number
    createdAt?: Date | string
    updatedAt?: Date | string
    installments?: FeeInstallmentCreateNestedManyWithoutStudentFeeInput
  }

  export type StudentFeeUncheckedCreateWithoutStudentInput = {
    id?: string
    academicYear: string
    tuitionFee: number
    transportFee?: number
    examFee?: number
    admissionFee?: number
    otherFees?: number
    discountPercentage?: number
    discountAmount?: number
    specialCharges?: number
    totalFee: number
    totalPayable: number
    totalPaid?: number
    totalPending: number
    createdAt?: Date | string
    updatedAt?: Date | string
    installments?: FeeInstallmentUncheckedCreateNestedManyWithoutStudentFeeInput
  }

  export type StudentFeeCreateOrConnectWithoutStudentInput = {
    where: StudentFeeWhereUniqueInput
    create: XOR<StudentFeeCreateWithoutStudentInput, StudentFeeUncheckedCreateWithoutStudentInput>
  }

  export type StudentFeeCreateManyStudentInputEnvelope = {
    data: StudentFeeCreateManyStudentInput | StudentFeeCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type FeePaymentCreateWithoutStudentInput = {
    id?: string
    amountPaid: number
    paymentDate?: Date | string
    paymentMethod: string
    transactionId?: string | null
    receiptNumber: string
    paymentFor: string
    remarks?: string | null
    paidBy?: string | null
    createdAt?: Date | string
    installment?: FeeInstallmentCreateNestedOneWithoutPaymentsInput
  }

  export type FeePaymentUncheckedCreateWithoutStudentInput = {
    id?: string
    amountPaid: number
    paymentDate?: Date | string
    paymentMethod: string
    transactionId?: string | null
    receiptNumber: string
    paymentFor: string
    remarks?: string | null
    paidBy?: string | null
    createdAt?: Date | string
    installmentId?: string | null
  }

  export type FeePaymentCreateOrConnectWithoutStudentInput = {
    where: FeePaymentWhereUniqueInput
    create: XOR<FeePaymentCreateWithoutStudentInput, FeePaymentUncheckedCreateWithoutStudentInput>
  }

  export type FeePaymentCreateManyStudentInputEnvelope = {
    data: FeePaymentCreateManyStudentInput | FeePaymentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type SchoolUpsertWithoutStudentsInput = {
    update: XOR<SchoolUpdateWithoutStudentsInput, SchoolUncheckedUpdateWithoutStudentsInput>
    create: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutStudentsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutStudentsInput, SchoolUncheckedUpdateWithoutStudentsInput>
  }

  export type SchoolUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolType?: StringFieldUpdateOperationsInput | string
    boardAffiliation?: StringFieldUpdateOperationsInput | string
    establishmentYear?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    schoolCategory?: StringFieldUpdateOperationsInput | string
    officialEmail?: StringFieldUpdateOperationsInput | string
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: StringFieldUpdateOperationsInput | string
    alternativeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    schoolAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    adminName?: StringFieldUpdateOperationsInput | string
    adminDesignation?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    confirmPassword?: StringFieldUpdateOperationsInput | string
    adminMobile?: StringFieldUpdateOperationsInput | string
    studentStrength?: StringFieldUpdateOperationsInput | string
    teachingStaff?: StringFieldUpdateOperationsInput | string
    nonTeachingStaff?: StringFieldUpdateOperationsInput | string
    totalClasses?: StringFieldUpdateOperationsInput | string
    mediumOfInstruction?: SchoolUpdatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolUpdatestreamsOfferedInput | string[]
    plan?: StringFieldUpdateOperationsInput | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    termsAccepted?: BoolFieldUpdateOperationsInput | boolean
    privacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentUpdateManyWithoutSchoolNestedInput
    feeStructures?: FeeStructureUpdateManyWithoutSchoolNestedInput
    routes?: RouteUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolType?: StringFieldUpdateOperationsInput | string
    boardAffiliation?: StringFieldUpdateOperationsInput | string
    establishmentYear?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    schoolCategory?: StringFieldUpdateOperationsInput | string
    officialEmail?: StringFieldUpdateOperationsInput | string
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: StringFieldUpdateOperationsInput | string
    alternativeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    schoolAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    adminName?: StringFieldUpdateOperationsInput | string
    adminDesignation?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    confirmPassword?: StringFieldUpdateOperationsInput | string
    adminMobile?: StringFieldUpdateOperationsInput | string
    studentStrength?: StringFieldUpdateOperationsInput | string
    teachingStaff?: StringFieldUpdateOperationsInput | string
    nonTeachingStaff?: StringFieldUpdateOperationsInput | string
    totalClasses?: StringFieldUpdateOperationsInput | string
    mediumOfInstruction?: SchoolUpdatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolUpdatestreamsOfferedInput | string[]
    plan?: StringFieldUpdateOperationsInput | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    termsAccepted?: BoolFieldUpdateOperationsInput | boolean
    privacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentUncheckedUpdateManyWithoutSchoolNestedInput
    feeStructures?: FeeStructureUncheckedUpdateManyWithoutSchoolNestedInput
    routes?: RouteUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type ParentUpsertWithoutStudentsInput = {
    update: XOR<ParentUpdateWithoutStudentsInput, ParentUncheckedUpdateWithoutStudentsInput>
    create: XOR<ParentCreateWithoutStudentsInput, ParentUncheckedCreateWithoutStudentsInput>
    where?: ParentWhereInput
  }

  export type ParentUpdateToOneWithWhereWithoutStudentsInput = {
    where?: ParentWhereInput
    data: XOR<ParentUpdateWithoutStudentsInput, ParentUncheckedUpdateWithoutStudentsInput>
  }

  export type ParentUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    fatherMobile?: StringFieldUpdateOperationsInput | string
    fatherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fatherAadhar?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: StringFieldUpdateOperationsInput | string
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherMobile?: StringFieldUpdateOperationsInput | string
    motherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    motherAadhar?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    guardianMobile?: NullableStringFieldUpdateOperationsInput | string | null
    guardianEmail?: NullableStringFieldUpdateOperationsInput | string | null
    primaryContact?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutParentsNestedInput
  }

  export type ParentUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    fatherMobile?: StringFieldUpdateOperationsInput | string
    fatherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fatherAadhar?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: StringFieldUpdateOperationsInput | string
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherMobile?: StringFieldUpdateOperationsInput | string
    motherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    motherAadhar?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    guardianMobile?: NullableStringFieldUpdateOperationsInput | string | null
    guardianEmail?: NullableStringFieldUpdateOperationsInput | string | null
    primaryContact?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type RouteUpsertWithoutStudentsInput = {
    update: XOR<RouteUpdateWithoutStudentsInput, RouteUncheckedUpdateWithoutStudentsInput>
    create: XOR<RouteCreateWithoutStudentsInput, RouteUncheckedCreateWithoutStudentsInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutStudentsInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutStudentsInput, RouteUncheckedUpdateWithoutStudentsInput>
  }

  export type RouteUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    stops?: RouteUpdatestopsInput | string[]
    vehicleNumber?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    driverMobile?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutRoutesNestedInput
  }

  export type RouteUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    stops?: RouteUpdatestopsInput | string[]
    vehicleNumber?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    driverMobile?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentAcademicHistoryUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentAcademicHistoryWhereUniqueInput
    update: XOR<StudentAcademicHistoryUpdateWithoutStudentInput, StudentAcademicHistoryUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentAcademicHistoryCreateWithoutStudentInput, StudentAcademicHistoryUncheckedCreateWithoutStudentInput>
  }

  export type StudentAcademicHistoryUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentAcademicHistoryWhereUniqueInput
    data: XOR<StudentAcademicHistoryUpdateWithoutStudentInput, StudentAcademicHistoryUncheckedUpdateWithoutStudentInput>
  }

  export type StudentAcademicHistoryUpdateManyWithWhereWithoutStudentInput = {
    where: StudentAcademicHistoryScalarWhereInput
    data: XOR<StudentAcademicHistoryUpdateManyMutationInput, StudentAcademicHistoryUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentAcademicHistoryScalarWhereInput = {
    AND?: StudentAcademicHistoryScalarWhereInput | StudentAcademicHistoryScalarWhereInput[]
    OR?: StudentAcademicHistoryScalarWhereInput[]
    NOT?: StudentAcademicHistoryScalarWhereInput | StudentAcademicHistoryScalarWhereInput[]
    id?: StringFilter<"StudentAcademicHistory"> | string
    academicYear?: StringFilter<"StudentAcademicHistory"> | string
    class?: StringFilter<"StudentAcademicHistory"> | string
    section?: StringFilter<"StudentAcademicHistory"> | string
    rollNumber?: IntFilter<"StudentAcademicHistory"> | number
    classTeacher?: StringNullableFilter<"StudentAcademicHistory"> | string | null
    promotionStatus?: StringFilter<"StudentAcademicHistory"> | string
    attendancePresent?: IntFilter<"StudentAcademicHistory"> | number
    attendanceAbsent?: IntFilter<"StudentAcademicHistory"> | number
    finalGrade?: StringNullableFilter<"StudentAcademicHistory"> | string | null
    remarks?: StringNullableFilter<"StudentAcademicHistory"> | string | null
    createdAt?: DateTimeFilter<"StudentAcademicHistory"> | Date | string
    updatedAt?: DateTimeFilter<"StudentAcademicHistory"> | Date | string
    studentId?: StringFilter<"StudentAcademicHistory"> | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutStudentInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutStudentInput, DocumentUncheckedUpdateWithoutStudentInput>
    create: XOR<DocumentCreateWithoutStudentInput, DocumentUncheckedCreateWithoutStudentInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutStudentInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutStudentInput, DocumentUncheckedUpdateWithoutStudentInput>
  }

  export type DocumentUpdateManyWithWhereWithoutStudentInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutStudentInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    documentType?: StringFilter<"Document"> | string
    documentUrl?: StringFilter<"Document"> | string
    fileName?: StringFilter<"Document"> | string
    fileSize?: IntFilter<"Document"> | number
    mimeType?: StringFilter<"Document"> | string
    verificationStatus?: StringFilter<"Document"> | string
    verifiedBy?: StringNullableFilter<"Document"> | string | null
    verifiedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    rejectionReason?: StringNullableFilter<"Document"> | string | null
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    studentId?: StringFilter<"Document"> | string
  }

  export type StudentFeeUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentFeeWhereUniqueInput
    update: XOR<StudentFeeUpdateWithoutStudentInput, StudentFeeUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentFeeCreateWithoutStudentInput, StudentFeeUncheckedCreateWithoutStudentInput>
  }

  export type StudentFeeUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentFeeWhereUniqueInput
    data: XOR<StudentFeeUpdateWithoutStudentInput, StudentFeeUncheckedUpdateWithoutStudentInput>
  }

  export type StudentFeeUpdateManyWithWhereWithoutStudentInput = {
    where: StudentFeeScalarWhereInput
    data: XOR<StudentFeeUpdateManyMutationInput, StudentFeeUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentFeeScalarWhereInput = {
    AND?: StudentFeeScalarWhereInput | StudentFeeScalarWhereInput[]
    OR?: StudentFeeScalarWhereInput[]
    NOT?: StudentFeeScalarWhereInput | StudentFeeScalarWhereInput[]
    id?: StringFilter<"StudentFee"> | string
    academicYear?: StringFilter<"StudentFee"> | string
    tuitionFee?: IntFilter<"StudentFee"> | number
    transportFee?: IntFilter<"StudentFee"> | number
    examFee?: IntFilter<"StudentFee"> | number
    admissionFee?: IntFilter<"StudentFee"> | number
    otherFees?: IntFilter<"StudentFee"> | number
    discountPercentage?: IntFilter<"StudentFee"> | number
    discountAmount?: IntFilter<"StudentFee"> | number
    specialCharges?: IntFilter<"StudentFee"> | number
    totalFee?: IntFilter<"StudentFee"> | number
    totalPayable?: IntFilter<"StudentFee"> | number
    totalPaid?: IntFilter<"StudentFee"> | number
    totalPending?: IntFilter<"StudentFee"> | number
    createdAt?: DateTimeFilter<"StudentFee"> | Date | string
    updatedAt?: DateTimeFilter<"StudentFee"> | Date | string
    studentId?: StringFilter<"StudentFee"> | string
  }

  export type FeePaymentUpsertWithWhereUniqueWithoutStudentInput = {
    where: FeePaymentWhereUniqueInput
    update: XOR<FeePaymentUpdateWithoutStudentInput, FeePaymentUncheckedUpdateWithoutStudentInput>
    create: XOR<FeePaymentCreateWithoutStudentInput, FeePaymentUncheckedCreateWithoutStudentInput>
  }

  export type FeePaymentUpdateWithWhereUniqueWithoutStudentInput = {
    where: FeePaymentWhereUniqueInput
    data: XOR<FeePaymentUpdateWithoutStudentInput, FeePaymentUncheckedUpdateWithoutStudentInput>
  }

  export type FeePaymentUpdateManyWithWhereWithoutStudentInput = {
    where: FeePaymentScalarWhereInput
    data: XOR<FeePaymentUpdateManyMutationInput, FeePaymentUncheckedUpdateManyWithoutStudentInput>
  }

  export type FeePaymentScalarWhereInput = {
    AND?: FeePaymentScalarWhereInput | FeePaymentScalarWhereInput[]
    OR?: FeePaymentScalarWhereInput[]
    NOT?: FeePaymentScalarWhereInput | FeePaymentScalarWhereInput[]
    id?: StringFilter<"FeePayment"> | string
    amountPaid?: IntFilter<"FeePayment"> | number
    paymentDate?: DateTimeFilter<"FeePayment"> | Date | string
    paymentMethod?: StringFilter<"FeePayment"> | string
    transactionId?: StringNullableFilter<"FeePayment"> | string | null
    receiptNumber?: StringFilter<"FeePayment"> | string
    paymentFor?: StringFilter<"FeePayment"> | string
    remarks?: StringNullableFilter<"FeePayment"> | string | null
    paidBy?: StringNullableFilter<"FeePayment"> | string | null
    createdAt?: DateTimeFilter<"FeePayment"> | Date | string
    studentId?: StringFilter<"FeePayment"> | string
    installmentId?: StringNullableFilter<"FeePayment"> | string | null
  }

  export type StudentCreateWithoutAcademicHistoryInput = {
    id?: string
    studentId: string
    admissionNumber: string
    qrCodeValue: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth: Date | string
    gender: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    photoUrl?: string | null
    parentPrimaryMobile: string
    parentAlternateMobile?: string | null
    parentEmail?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    admissionDate: Date | string
    previousSchoolId?: string | null
    usesTransport?: boolean
    pickupPoint?: string | null
    dropPoint?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutStudentsInput
    parent: ParentCreateNestedOneWithoutStudentsInput
    route?: RouteCreateNestedOneWithoutStudentsInput
    documents?: DocumentCreateNestedManyWithoutStudentInput
    studentFees?: StudentFeeCreateNestedManyWithoutStudentInput
    feePayments?: FeePaymentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutAcademicHistoryInput = {
    id?: string
    studentId: string
    admissionNumber: string
    qrCodeValue: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth: Date | string
    gender: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    photoUrl?: string | null
    parentPrimaryMobile: string
    parentAlternateMobile?: string | null
    parentEmail?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    admissionDate: Date | string
    previousSchoolId?: string | null
    usesTransport?: boolean
    transportRouteId?: string | null
    pickupPoint?: string | null
    dropPoint?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
    parentId: string
    documents?: DocumentUncheckedCreateNestedManyWithoutStudentInput
    studentFees?: StudentFeeUncheckedCreateNestedManyWithoutStudentInput
    feePayments?: FeePaymentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutAcademicHistoryInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAcademicHistoryInput, StudentUncheckedCreateWithoutAcademicHistoryInput>
  }

  export type StudentUpsertWithoutAcademicHistoryInput = {
    update: XOR<StudentUpdateWithoutAcademicHistoryInput, StudentUncheckedUpdateWithoutAcademicHistoryInput>
    create: XOR<StudentCreateWithoutAcademicHistoryInput, StudentUncheckedCreateWithoutAcademicHistoryInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAcademicHistoryInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAcademicHistoryInput, StudentUncheckedUpdateWithoutAcademicHistoryInput>
  }

  export type StudentUpdateWithoutAcademicHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    qrCodeValue?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentPrimaryMobile?: StringFieldUpdateOperationsInput | string
    parentAlternateMobile?: NullableStringFieldUpdateOperationsInput | string | null
    parentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchoolId?: NullableStringFieldUpdateOperationsInput | string | null
    usesTransport?: BoolFieldUpdateOperationsInput | boolean
    pickupPoint?: NullableStringFieldUpdateOperationsInput | string | null
    dropPoint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutStudentsNestedInput
    parent?: ParentUpdateOneRequiredWithoutStudentsNestedInput
    route?: RouteUpdateOneWithoutStudentsNestedInput
    documents?: DocumentUpdateManyWithoutStudentNestedInput
    studentFees?: StudentFeeUpdateManyWithoutStudentNestedInput
    feePayments?: FeePaymentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutAcademicHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    qrCodeValue?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentPrimaryMobile?: StringFieldUpdateOperationsInput | string
    parentAlternateMobile?: NullableStringFieldUpdateOperationsInput | string | null
    parentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchoolId?: NullableStringFieldUpdateOperationsInput | string | null
    usesTransport?: BoolFieldUpdateOperationsInput | boolean
    transportRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    pickupPoint?: NullableStringFieldUpdateOperationsInput | string | null
    dropPoint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    documents?: DocumentUncheckedUpdateManyWithoutStudentNestedInput
    studentFees?: StudentFeeUncheckedUpdateManyWithoutStudentNestedInput
    feePayments?: FeePaymentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SchoolCreateWithoutParentsInput = {
    id?: string
    schoolName: string
    schoolType: string
    boardAffiliation: string
    establishmentYear: string
    schoolCode: string
    udiseCode?: string | null
    schoolCategory: string
    officialEmail: string
    landlineNumber?: string | null
    mobileNumber: string
    alternativeMobile?: string | null
    website?: string | null
    schoolAddress: string
    city: string
    state: string
    pinCode: string
    country: string
    adminName: string
    adminDesignation: string
    adminEmail: string
    adminPassword: string
    confirmPassword: string
    adminMobile: string
    studentStrength: string
    teachingStaff: string
    nonTeachingStaff: string
    totalClasses: string
    mediumOfInstruction?: SchoolCreatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolCreatestreamsOfferedInput | string[]
    plan: string
    billingCycle: string
    termsAccepted: boolean
    privacyAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentCreateNestedManyWithoutSchoolInput
    feeStructures?: FeeStructureCreateNestedManyWithoutSchoolInput
    routes?: RouteCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutParentsInput = {
    id?: string
    schoolName: string
    schoolType: string
    boardAffiliation: string
    establishmentYear: string
    schoolCode: string
    udiseCode?: string | null
    schoolCategory: string
    officialEmail: string
    landlineNumber?: string | null
    mobileNumber: string
    alternativeMobile?: string | null
    website?: string | null
    schoolAddress: string
    city: string
    state: string
    pinCode: string
    country: string
    adminName: string
    adminDesignation: string
    adminEmail: string
    adminPassword: string
    confirmPassword: string
    adminMobile: string
    studentStrength: string
    teachingStaff: string
    nonTeachingStaff: string
    totalClasses: string
    mediumOfInstruction?: SchoolCreatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolCreatestreamsOfferedInput | string[]
    plan: string
    billingCycle: string
    termsAccepted: boolean
    privacyAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutSchoolInput
    feeStructures?: FeeStructureUncheckedCreateNestedManyWithoutSchoolInput
    routes?: RouteUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutParentsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutParentsInput, SchoolUncheckedCreateWithoutParentsInput>
  }

  export type StudentCreateWithoutParentInput = {
    id?: string
    studentId: string
    admissionNumber: string
    qrCodeValue: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth: Date | string
    gender: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    photoUrl?: string | null
    parentPrimaryMobile: string
    parentAlternateMobile?: string | null
    parentEmail?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    admissionDate: Date | string
    previousSchoolId?: string | null
    usesTransport?: boolean
    pickupPoint?: string | null
    dropPoint?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutStudentsInput
    route?: RouteCreateNestedOneWithoutStudentsInput
    academicHistory?: StudentAcademicHistoryCreateNestedManyWithoutStudentInput
    documents?: DocumentCreateNestedManyWithoutStudentInput
    studentFees?: StudentFeeCreateNestedManyWithoutStudentInput
    feePayments?: FeePaymentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutParentInput = {
    id?: string
    studentId: string
    admissionNumber: string
    qrCodeValue: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth: Date | string
    gender: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    photoUrl?: string | null
    parentPrimaryMobile: string
    parentAlternateMobile?: string | null
    parentEmail?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    admissionDate: Date | string
    previousSchoolId?: string | null
    usesTransport?: boolean
    transportRouteId?: string | null
    pickupPoint?: string | null
    dropPoint?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
    academicHistory?: StudentAcademicHistoryUncheckedCreateNestedManyWithoutStudentInput
    documents?: DocumentUncheckedCreateNestedManyWithoutStudentInput
    studentFees?: StudentFeeUncheckedCreateNestedManyWithoutStudentInput
    feePayments?: FeePaymentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutParentInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutParentInput, StudentUncheckedCreateWithoutParentInput>
  }

  export type StudentCreateManyParentInputEnvelope = {
    data: StudentCreateManyParentInput | StudentCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type SchoolUpsertWithoutParentsInput = {
    update: XOR<SchoolUpdateWithoutParentsInput, SchoolUncheckedUpdateWithoutParentsInput>
    create: XOR<SchoolCreateWithoutParentsInput, SchoolUncheckedCreateWithoutParentsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutParentsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutParentsInput, SchoolUncheckedUpdateWithoutParentsInput>
  }

  export type SchoolUpdateWithoutParentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolType?: StringFieldUpdateOperationsInput | string
    boardAffiliation?: StringFieldUpdateOperationsInput | string
    establishmentYear?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    schoolCategory?: StringFieldUpdateOperationsInput | string
    officialEmail?: StringFieldUpdateOperationsInput | string
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: StringFieldUpdateOperationsInput | string
    alternativeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    schoolAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    adminName?: StringFieldUpdateOperationsInput | string
    adminDesignation?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    confirmPassword?: StringFieldUpdateOperationsInput | string
    adminMobile?: StringFieldUpdateOperationsInput | string
    studentStrength?: StringFieldUpdateOperationsInput | string
    teachingStaff?: StringFieldUpdateOperationsInput | string
    nonTeachingStaff?: StringFieldUpdateOperationsInput | string
    totalClasses?: StringFieldUpdateOperationsInput | string
    mediumOfInstruction?: SchoolUpdatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolUpdatestreamsOfferedInput | string[]
    plan?: StringFieldUpdateOperationsInput | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    termsAccepted?: BoolFieldUpdateOperationsInput | boolean
    privacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutSchoolNestedInput
    feeStructures?: FeeStructureUpdateManyWithoutSchoolNestedInput
    routes?: RouteUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutParentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolType?: StringFieldUpdateOperationsInput | string
    boardAffiliation?: StringFieldUpdateOperationsInput | string
    establishmentYear?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    schoolCategory?: StringFieldUpdateOperationsInput | string
    officialEmail?: StringFieldUpdateOperationsInput | string
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: StringFieldUpdateOperationsInput | string
    alternativeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    schoolAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    adminName?: StringFieldUpdateOperationsInput | string
    adminDesignation?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    confirmPassword?: StringFieldUpdateOperationsInput | string
    adminMobile?: StringFieldUpdateOperationsInput | string
    studentStrength?: StringFieldUpdateOperationsInput | string
    teachingStaff?: StringFieldUpdateOperationsInput | string
    nonTeachingStaff?: StringFieldUpdateOperationsInput | string
    totalClasses?: StringFieldUpdateOperationsInput | string
    mediumOfInstruction?: SchoolUpdatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolUpdatestreamsOfferedInput | string[]
    plan?: StringFieldUpdateOperationsInput | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    termsAccepted?: BoolFieldUpdateOperationsInput | boolean
    privacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutSchoolNestedInput
    feeStructures?: FeeStructureUncheckedUpdateManyWithoutSchoolNestedInput
    routes?: RouteUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type StudentUpsertWithWhereUniqueWithoutParentInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutParentInput, StudentUncheckedUpdateWithoutParentInput>
    create: XOR<StudentCreateWithoutParentInput, StudentUncheckedCreateWithoutParentInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutParentInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutParentInput, StudentUncheckedUpdateWithoutParentInput>
  }

  export type StudentUpdateManyWithWhereWithoutParentInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutParentInput>
  }

  export type StudentCreateWithoutDocumentsInput = {
    id?: string
    studentId: string
    admissionNumber: string
    qrCodeValue: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth: Date | string
    gender: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    photoUrl?: string | null
    parentPrimaryMobile: string
    parentAlternateMobile?: string | null
    parentEmail?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    admissionDate: Date | string
    previousSchoolId?: string | null
    usesTransport?: boolean
    pickupPoint?: string | null
    dropPoint?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutStudentsInput
    parent: ParentCreateNestedOneWithoutStudentsInput
    route?: RouteCreateNestedOneWithoutStudentsInput
    academicHistory?: StudentAcademicHistoryCreateNestedManyWithoutStudentInput
    studentFees?: StudentFeeCreateNestedManyWithoutStudentInput
    feePayments?: FeePaymentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutDocumentsInput = {
    id?: string
    studentId: string
    admissionNumber: string
    qrCodeValue: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth: Date | string
    gender: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    photoUrl?: string | null
    parentPrimaryMobile: string
    parentAlternateMobile?: string | null
    parentEmail?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    admissionDate: Date | string
    previousSchoolId?: string | null
    usesTransport?: boolean
    transportRouteId?: string | null
    pickupPoint?: string | null
    dropPoint?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
    parentId: string
    academicHistory?: StudentAcademicHistoryUncheckedCreateNestedManyWithoutStudentInput
    studentFees?: StudentFeeUncheckedCreateNestedManyWithoutStudentInput
    feePayments?: FeePaymentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutDocumentsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutDocumentsInput, StudentUncheckedCreateWithoutDocumentsInput>
  }

  export type StudentUpsertWithoutDocumentsInput = {
    update: XOR<StudentUpdateWithoutDocumentsInput, StudentUncheckedUpdateWithoutDocumentsInput>
    create: XOR<StudentCreateWithoutDocumentsInput, StudentUncheckedCreateWithoutDocumentsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutDocumentsInput, StudentUncheckedUpdateWithoutDocumentsInput>
  }

  export type StudentUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    qrCodeValue?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentPrimaryMobile?: StringFieldUpdateOperationsInput | string
    parentAlternateMobile?: NullableStringFieldUpdateOperationsInput | string | null
    parentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchoolId?: NullableStringFieldUpdateOperationsInput | string | null
    usesTransport?: BoolFieldUpdateOperationsInput | boolean
    pickupPoint?: NullableStringFieldUpdateOperationsInput | string | null
    dropPoint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutStudentsNestedInput
    parent?: ParentUpdateOneRequiredWithoutStudentsNestedInput
    route?: RouteUpdateOneWithoutStudentsNestedInput
    academicHistory?: StudentAcademicHistoryUpdateManyWithoutStudentNestedInput
    studentFees?: StudentFeeUpdateManyWithoutStudentNestedInput
    feePayments?: FeePaymentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    qrCodeValue?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentPrimaryMobile?: StringFieldUpdateOperationsInput | string
    parentAlternateMobile?: NullableStringFieldUpdateOperationsInput | string | null
    parentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchoolId?: NullableStringFieldUpdateOperationsInput | string | null
    usesTransport?: BoolFieldUpdateOperationsInput | boolean
    transportRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    pickupPoint?: NullableStringFieldUpdateOperationsInput | string | null
    dropPoint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    academicHistory?: StudentAcademicHistoryUncheckedUpdateManyWithoutStudentNestedInput
    studentFees?: StudentFeeUncheckedUpdateManyWithoutStudentNestedInput
    feePayments?: FeePaymentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SchoolCreateWithoutFeeStructuresInput = {
    id?: string
    schoolName: string
    schoolType: string
    boardAffiliation: string
    establishmentYear: string
    schoolCode: string
    udiseCode?: string | null
    schoolCategory: string
    officialEmail: string
    landlineNumber?: string | null
    mobileNumber: string
    alternativeMobile?: string | null
    website?: string | null
    schoolAddress: string
    city: string
    state: string
    pinCode: string
    country: string
    adminName: string
    adminDesignation: string
    adminEmail: string
    adminPassword: string
    confirmPassword: string
    adminMobile: string
    studentStrength: string
    teachingStaff: string
    nonTeachingStaff: string
    totalClasses: string
    mediumOfInstruction?: SchoolCreatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolCreatestreamsOfferedInput | string[]
    plan: string
    billingCycle: string
    termsAccepted: boolean
    privacyAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentCreateNestedManyWithoutSchoolInput
    parents?: ParentCreateNestedManyWithoutSchoolInput
    routes?: RouteCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutFeeStructuresInput = {
    id?: string
    schoolName: string
    schoolType: string
    boardAffiliation: string
    establishmentYear: string
    schoolCode: string
    udiseCode?: string | null
    schoolCategory: string
    officialEmail: string
    landlineNumber?: string | null
    mobileNumber: string
    alternativeMobile?: string | null
    website?: string | null
    schoolAddress: string
    city: string
    state: string
    pinCode: string
    country: string
    adminName: string
    adminDesignation: string
    adminEmail: string
    adminPassword: string
    confirmPassword: string
    adminMobile: string
    studentStrength: string
    teachingStaff: string
    nonTeachingStaff: string
    totalClasses: string
    mediumOfInstruction?: SchoolCreatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolCreatestreamsOfferedInput | string[]
    plan: string
    billingCycle: string
    termsAccepted: boolean
    privacyAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutSchoolInput
    parents?: ParentUncheckedCreateNestedManyWithoutSchoolInput
    routes?: RouteUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutFeeStructuresInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutFeeStructuresInput, SchoolUncheckedCreateWithoutFeeStructuresInput>
  }

  export type SchoolUpsertWithoutFeeStructuresInput = {
    update: XOR<SchoolUpdateWithoutFeeStructuresInput, SchoolUncheckedUpdateWithoutFeeStructuresInput>
    create: XOR<SchoolCreateWithoutFeeStructuresInput, SchoolUncheckedCreateWithoutFeeStructuresInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutFeeStructuresInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutFeeStructuresInput, SchoolUncheckedUpdateWithoutFeeStructuresInput>
  }

  export type SchoolUpdateWithoutFeeStructuresInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolType?: StringFieldUpdateOperationsInput | string
    boardAffiliation?: StringFieldUpdateOperationsInput | string
    establishmentYear?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    schoolCategory?: StringFieldUpdateOperationsInput | string
    officialEmail?: StringFieldUpdateOperationsInput | string
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: StringFieldUpdateOperationsInput | string
    alternativeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    schoolAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    adminName?: StringFieldUpdateOperationsInput | string
    adminDesignation?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    confirmPassword?: StringFieldUpdateOperationsInput | string
    adminMobile?: StringFieldUpdateOperationsInput | string
    studentStrength?: StringFieldUpdateOperationsInput | string
    teachingStaff?: StringFieldUpdateOperationsInput | string
    nonTeachingStaff?: StringFieldUpdateOperationsInput | string
    totalClasses?: StringFieldUpdateOperationsInput | string
    mediumOfInstruction?: SchoolUpdatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolUpdatestreamsOfferedInput | string[]
    plan?: StringFieldUpdateOperationsInput | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    termsAccepted?: BoolFieldUpdateOperationsInput | boolean
    privacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutSchoolNestedInput
    parents?: ParentUpdateManyWithoutSchoolNestedInput
    routes?: RouteUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutFeeStructuresInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolType?: StringFieldUpdateOperationsInput | string
    boardAffiliation?: StringFieldUpdateOperationsInput | string
    establishmentYear?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    schoolCategory?: StringFieldUpdateOperationsInput | string
    officialEmail?: StringFieldUpdateOperationsInput | string
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: StringFieldUpdateOperationsInput | string
    alternativeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    schoolAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    adminName?: StringFieldUpdateOperationsInput | string
    adminDesignation?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    confirmPassword?: StringFieldUpdateOperationsInput | string
    adminMobile?: StringFieldUpdateOperationsInput | string
    studentStrength?: StringFieldUpdateOperationsInput | string
    teachingStaff?: StringFieldUpdateOperationsInput | string
    nonTeachingStaff?: StringFieldUpdateOperationsInput | string
    totalClasses?: StringFieldUpdateOperationsInput | string
    mediumOfInstruction?: SchoolUpdatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolUpdatestreamsOfferedInput | string[]
    plan?: StringFieldUpdateOperationsInput | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    termsAccepted?: BoolFieldUpdateOperationsInput | boolean
    privacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutSchoolNestedInput
    parents?: ParentUncheckedUpdateManyWithoutSchoolNestedInput
    routes?: RouteUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type StudentCreateWithoutStudentFeesInput = {
    id?: string
    studentId: string
    admissionNumber: string
    qrCodeValue: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth: Date | string
    gender: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    photoUrl?: string | null
    parentPrimaryMobile: string
    parentAlternateMobile?: string | null
    parentEmail?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    admissionDate: Date | string
    previousSchoolId?: string | null
    usesTransport?: boolean
    pickupPoint?: string | null
    dropPoint?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutStudentsInput
    parent: ParentCreateNestedOneWithoutStudentsInput
    route?: RouteCreateNestedOneWithoutStudentsInput
    academicHistory?: StudentAcademicHistoryCreateNestedManyWithoutStudentInput
    documents?: DocumentCreateNestedManyWithoutStudentInput
    feePayments?: FeePaymentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutStudentFeesInput = {
    id?: string
    studentId: string
    admissionNumber: string
    qrCodeValue: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth: Date | string
    gender: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    photoUrl?: string | null
    parentPrimaryMobile: string
    parentAlternateMobile?: string | null
    parentEmail?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    admissionDate: Date | string
    previousSchoolId?: string | null
    usesTransport?: boolean
    transportRouteId?: string | null
    pickupPoint?: string | null
    dropPoint?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
    parentId: string
    academicHistory?: StudentAcademicHistoryUncheckedCreateNestedManyWithoutStudentInput
    documents?: DocumentUncheckedCreateNestedManyWithoutStudentInput
    feePayments?: FeePaymentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutStudentFeesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutStudentFeesInput, StudentUncheckedCreateWithoutStudentFeesInput>
  }

  export type FeeInstallmentCreateWithoutStudentFeeInput = {
    id?: string
    installmentNumber: number
    month: string
    dueDate: Date | string
    amountDue: number
    amountPaid?: number
    lateFee?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: FeePaymentCreateNestedManyWithoutInstallmentInput
  }

  export type FeeInstallmentUncheckedCreateWithoutStudentFeeInput = {
    id?: string
    installmentNumber: number
    month: string
    dueDate: Date | string
    amountDue: number
    amountPaid?: number
    lateFee?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: FeePaymentUncheckedCreateNestedManyWithoutInstallmentInput
  }

  export type FeeInstallmentCreateOrConnectWithoutStudentFeeInput = {
    where: FeeInstallmentWhereUniqueInput
    create: XOR<FeeInstallmentCreateWithoutStudentFeeInput, FeeInstallmentUncheckedCreateWithoutStudentFeeInput>
  }

  export type FeeInstallmentCreateManyStudentFeeInputEnvelope = {
    data: FeeInstallmentCreateManyStudentFeeInput | FeeInstallmentCreateManyStudentFeeInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutStudentFeesInput = {
    update: XOR<StudentUpdateWithoutStudentFeesInput, StudentUncheckedUpdateWithoutStudentFeesInput>
    create: XOR<StudentCreateWithoutStudentFeesInput, StudentUncheckedCreateWithoutStudentFeesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutStudentFeesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutStudentFeesInput, StudentUncheckedUpdateWithoutStudentFeesInput>
  }

  export type StudentUpdateWithoutStudentFeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    qrCodeValue?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentPrimaryMobile?: StringFieldUpdateOperationsInput | string
    parentAlternateMobile?: NullableStringFieldUpdateOperationsInput | string | null
    parentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchoolId?: NullableStringFieldUpdateOperationsInput | string | null
    usesTransport?: BoolFieldUpdateOperationsInput | boolean
    pickupPoint?: NullableStringFieldUpdateOperationsInput | string | null
    dropPoint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutStudentsNestedInput
    parent?: ParentUpdateOneRequiredWithoutStudentsNestedInput
    route?: RouteUpdateOneWithoutStudentsNestedInput
    academicHistory?: StudentAcademicHistoryUpdateManyWithoutStudentNestedInput
    documents?: DocumentUpdateManyWithoutStudentNestedInput
    feePayments?: FeePaymentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutStudentFeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    qrCodeValue?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentPrimaryMobile?: StringFieldUpdateOperationsInput | string
    parentAlternateMobile?: NullableStringFieldUpdateOperationsInput | string | null
    parentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchoolId?: NullableStringFieldUpdateOperationsInput | string | null
    usesTransport?: BoolFieldUpdateOperationsInput | boolean
    transportRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    pickupPoint?: NullableStringFieldUpdateOperationsInput | string | null
    dropPoint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    academicHistory?: StudentAcademicHistoryUncheckedUpdateManyWithoutStudentNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutStudentNestedInput
    feePayments?: FeePaymentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type FeeInstallmentUpsertWithWhereUniqueWithoutStudentFeeInput = {
    where: FeeInstallmentWhereUniqueInput
    update: XOR<FeeInstallmentUpdateWithoutStudentFeeInput, FeeInstallmentUncheckedUpdateWithoutStudentFeeInput>
    create: XOR<FeeInstallmentCreateWithoutStudentFeeInput, FeeInstallmentUncheckedCreateWithoutStudentFeeInput>
  }

  export type FeeInstallmentUpdateWithWhereUniqueWithoutStudentFeeInput = {
    where: FeeInstallmentWhereUniqueInput
    data: XOR<FeeInstallmentUpdateWithoutStudentFeeInput, FeeInstallmentUncheckedUpdateWithoutStudentFeeInput>
  }

  export type FeeInstallmentUpdateManyWithWhereWithoutStudentFeeInput = {
    where: FeeInstallmentScalarWhereInput
    data: XOR<FeeInstallmentUpdateManyMutationInput, FeeInstallmentUncheckedUpdateManyWithoutStudentFeeInput>
  }

  export type FeeInstallmentScalarWhereInput = {
    AND?: FeeInstallmentScalarWhereInput | FeeInstallmentScalarWhereInput[]
    OR?: FeeInstallmentScalarWhereInput[]
    NOT?: FeeInstallmentScalarWhereInput | FeeInstallmentScalarWhereInput[]
    id?: StringFilter<"FeeInstallment"> | string
    installmentNumber?: IntFilter<"FeeInstallment"> | number
    month?: StringFilter<"FeeInstallment"> | string
    dueDate?: DateTimeFilter<"FeeInstallment"> | Date | string
    amountDue?: IntFilter<"FeeInstallment"> | number
    amountPaid?: IntFilter<"FeeInstallment"> | number
    lateFee?: IntFilter<"FeeInstallment"> | number
    status?: StringFilter<"FeeInstallment"> | string
    createdAt?: DateTimeFilter<"FeeInstallment"> | Date | string
    updatedAt?: DateTimeFilter<"FeeInstallment"> | Date | string
    studentFeeId?: StringFilter<"FeeInstallment"> | string
  }

  export type StudentFeeCreateWithoutInstallmentsInput = {
    id?: string
    academicYear: string
    tuitionFee: number
    transportFee?: number
    examFee?: number
    admissionFee?: number
    otherFees?: number
    discountPercentage?: number
    discountAmount?: number
    specialCharges?: number
    totalFee: number
    totalPayable: number
    totalPaid?: number
    totalPending: number
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutStudentFeesInput
  }

  export type StudentFeeUncheckedCreateWithoutInstallmentsInput = {
    id?: string
    academicYear: string
    tuitionFee: number
    transportFee?: number
    examFee?: number
    admissionFee?: number
    otherFees?: number
    discountPercentage?: number
    discountAmount?: number
    specialCharges?: number
    totalFee: number
    totalPayable: number
    totalPaid?: number
    totalPending: number
    createdAt?: Date | string
    updatedAt?: Date | string
    studentId: string
  }

  export type StudentFeeCreateOrConnectWithoutInstallmentsInput = {
    where: StudentFeeWhereUniqueInput
    create: XOR<StudentFeeCreateWithoutInstallmentsInput, StudentFeeUncheckedCreateWithoutInstallmentsInput>
  }

  export type FeePaymentCreateWithoutInstallmentInput = {
    id?: string
    amountPaid: number
    paymentDate?: Date | string
    paymentMethod: string
    transactionId?: string | null
    receiptNumber: string
    paymentFor: string
    remarks?: string | null
    paidBy?: string | null
    createdAt?: Date | string
    student: StudentCreateNestedOneWithoutFeePaymentsInput
  }

  export type FeePaymentUncheckedCreateWithoutInstallmentInput = {
    id?: string
    amountPaid: number
    paymentDate?: Date | string
    paymentMethod: string
    transactionId?: string | null
    receiptNumber: string
    paymentFor: string
    remarks?: string | null
    paidBy?: string | null
    createdAt?: Date | string
    studentId: string
  }

  export type FeePaymentCreateOrConnectWithoutInstallmentInput = {
    where: FeePaymentWhereUniqueInput
    create: XOR<FeePaymentCreateWithoutInstallmentInput, FeePaymentUncheckedCreateWithoutInstallmentInput>
  }

  export type FeePaymentCreateManyInstallmentInputEnvelope = {
    data: FeePaymentCreateManyInstallmentInput | FeePaymentCreateManyInstallmentInput[]
    skipDuplicates?: boolean
  }

  export type StudentFeeUpsertWithoutInstallmentsInput = {
    update: XOR<StudentFeeUpdateWithoutInstallmentsInput, StudentFeeUncheckedUpdateWithoutInstallmentsInput>
    create: XOR<StudentFeeCreateWithoutInstallmentsInput, StudentFeeUncheckedCreateWithoutInstallmentsInput>
    where?: StudentFeeWhereInput
  }

  export type StudentFeeUpdateToOneWithWhereWithoutInstallmentsInput = {
    where?: StudentFeeWhereInput
    data: XOR<StudentFeeUpdateWithoutInstallmentsInput, StudentFeeUncheckedUpdateWithoutInstallmentsInput>
  }

  export type StudentFeeUpdateWithoutInstallmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    tuitionFee?: IntFieldUpdateOperationsInput | number
    transportFee?: IntFieldUpdateOperationsInput | number
    examFee?: IntFieldUpdateOperationsInput | number
    admissionFee?: IntFieldUpdateOperationsInput | number
    otherFees?: IntFieldUpdateOperationsInput | number
    discountPercentage?: IntFieldUpdateOperationsInput | number
    discountAmount?: IntFieldUpdateOperationsInput | number
    specialCharges?: IntFieldUpdateOperationsInput | number
    totalFee?: IntFieldUpdateOperationsInput | number
    totalPayable?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    totalPending?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutStudentFeesNestedInput
  }

  export type StudentFeeUncheckedUpdateWithoutInstallmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    tuitionFee?: IntFieldUpdateOperationsInput | number
    transportFee?: IntFieldUpdateOperationsInput | number
    examFee?: IntFieldUpdateOperationsInput | number
    admissionFee?: IntFieldUpdateOperationsInput | number
    otherFees?: IntFieldUpdateOperationsInput | number
    discountPercentage?: IntFieldUpdateOperationsInput | number
    discountAmount?: IntFieldUpdateOperationsInput | number
    specialCharges?: IntFieldUpdateOperationsInput | number
    totalFee?: IntFieldUpdateOperationsInput | number
    totalPayable?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    totalPending?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type FeePaymentUpsertWithWhereUniqueWithoutInstallmentInput = {
    where: FeePaymentWhereUniqueInput
    update: XOR<FeePaymentUpdateWithoutInstallmentInput, FeePaymentUncheckedUpdateWithoutInstallmentInput>
    create: XOR<FeePaymentCreateWithoutInstallmentInput, FeePaymentUncheckedCreateWithoutInstallmentInput>
  }

  export type FeePaymentUpdateWithWhereUniqueWithoutInstallmentInput = {
    where: FeePaymentWhereUniqueInput
    data: XOR<FeePaymentUpdateWithoutInstallmentInput, FeePaymentUncheckedUpdateWithoutInstallmentInput>
  }

  export type FeePaymentUpdateManyWithWhereWithoutInstallmentInput = {
    where: FeePaymentScalarWhereInput
    data: XOR<FeePaymentUpdateManyMutationInput, FeePaymentUncheckedUpdateManyWithoutInstallmentInput>
  }

  export type StudentCreateWithoutFeePaymentsInput = {
    id?: string
    studentId: string
    admissionNumber: string
    qrCodeValue: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth: Date | string
    gender: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    photoUrl?: string | null
    parentPrimaryMobile: string
    parentAlternateMobile?: string | null
    parentEmail?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    admissionDate: Date | string
    previousSchoolId?: string | null
    usesTransport?: boolean
    pickupPoint?: string | null
    dropPoint?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutStudentsInput
    parent: ParentCreateNestedOneWithoutStudentsInput
    route?: RouteCreateNestedOneWithoutStudentsInput
    academicHistory?: StudentAcademicHistoryCreateNestedManyWithoutStudentInput
    documents?: DocumentCreateNestedManyWithoutStudentInput
    studentFees?: StudentFeeCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutFeePaymentsInput = {
    id?: string
    studentId: string
    admissionNumber: string
    qrCodeValue: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth: Date | string
    gender: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    photoUrl?: string | null
    parentPrimaryMobile: string
    parentAlternateMobile?: string | null
    parentEmail?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    admissionDate: Date | string
    previousSchoolId?: string | null
    usesTransport?: boolean
    transportRouteId?: string | null
    pickupPoint?: string | null
    dropPoint?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
    parentId: string
    academicHistory?: StudentAcademicHistoryUncheckedCreateNestedManyWithoutStudentInput
    documents?: DocumentUncheckedCreateNestedManyWithoutStudentInput
    studentFees?: StudentFeeUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutFeePaymentsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutFeePaymentsInput, StudentUncheckedCreateWithoutFeePaymentsInput>
  }

  export type FeeInstallmentCreateWithoutPaymentsInput = {
    id?: string
    installmentNumber: number
    month: string
    dueDate: Date | string
    amountDue: number
    amountPaid?: number
    lateFee?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentFee: StudentFeeCreateNestedOneWithoutInstallmentsInput
  }

  export type FeeInstallmentUncheckedCreateWithoutPaymentsInput = {
    id?: string
    installmentNumber: number
    month: string
    dueDate: Date | string
    amountDue: number
    amountPaid?: number
    lateFee?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentFeeId: string
  }

  export type FeeInstallmentCreateOrConnectWithoutPaymentsInput = {
    where: FeeInstallmentWhereUniqueInput
    create: XOR<FeeInstallmentCreateWithoutPaymentsInput, FeeInstallmentUncheckedCreateWithoutPaymentsInput>
  }

  export type StudentUpsertWithoutFeePaymentsInput = {
    update: XOR<StudentUpdateWithoutFeePaymentsInput, StudentUncheckedUpdateWithoutFeePaymentsInput>
    create: XOR<StudentCreateWithoutFeePaymentsInput, StudentUncheckedCreateWithoutFeePaymentsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutFeePaymentsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutFeePaymentsInput, StudentUncheckedUpdateWithoutFeePaymentsInput>
  }

  export type StudentUpdateWithoutFeePaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    qrCodeValue?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentPrimaryMobile?: StringFieldUpdateOperationsInput | string
    parentAlternateMobile?: NullableStringFieldUpdateOperationsInput | string | null
    parentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchoolId?: NullableStringFieldUpdateOperationsInput | string | null
    usesTransport?: BoolFieldUpdateOperationsInput | boolean
    pickupPoint?: NullableStringFieldUpdateOperationsInput | string | null
    dropPoint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutStudentsNestedInput
    parent?: ParentUpdateOneRequiredWithoutStudentsNestedInput
    route?: RouteUpdateOneWithoutStudentsNestedInput
    academicHistory?: StudentAcademicHistoryUpdateManyWithoutStudentNestedInput
    documents?: DocumentUpdateManyWithoutStudentNestedInput
    studentFees?: StudentFeeUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutFeePaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    qrCodeValue?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentPrimaryMobile?: StringFieldUpdateOperationsInput | string
    parentAlternateMobile?: NullableStringFieldUpdateOperationsInput | string | null
    parentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchoolId?: NullableStringFieldUpdateOperationsInput | string | null
    usesTransport?: BoolFieldUpdateOperationsInput | boolean
    transportRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    pickupPoint?: NullableStringFieldUpdateOperationsInput | string | null
    dropPoint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    academicHistory?: StudentAcademicHistoryUncheckedUpdateManyWithoutStudentNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutStudentNestedInput
    studentFees?: StudentFeeUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type FeeInstallmentUpsertWithoutPaymentsInput = {
    update: XOR<FeeInstallmentUpdateWithoutPaymentsInput, FeeInstallmentUncheckedUpdateWithoutPaymentsInput>
    create: XOR<FeeInstallmentCreateWithoutPaymentsInput, FeeInstallmentUncheckedCreateWithoutPaymentsInput>
    where?: FeeInstallmentWhereInput
  }

  export type FeeInstallmentUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: FeeInstallmentWhereInput
    data: XOR<FeeInstallmentUpdateWithoutPaymentsInput, FeeInstallmentUncheckedUpdateWithoutPaymentsInput>
  }

  export type FeeInstallmentUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    installmentNumber?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amountDue?: IntFieldUpdateOperationsInput | number
    amountPaid?: IntFieldUpdateOperationsInput | number
    lateFee?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentFee?: StudentFeeUpdateOneRequiredWithoutInstallmentsNestedInput
  }

  export type FeeInstallmentUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    installmentNumber?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amountDue?: IntFieldUpdateOperationsInput | number
    amountPaid?: IntFieldUpdateOperationsInput | number
    lateFee?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentFeeId?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolCreateWithoutRoutesInput = {
    id?: string
    schoolName: string
    schoolType: string
    boardAffiliation: string
    establishmentYear: string
    schoolCode: string
    udiseCode?: string | null
    schoolCategory: string
    officialEmail: string
    landlineNumber?: string | null
    mobileNumber: string
    alternativeMobile?: string | null
    website?: string | null
    schoolAddress: string
    city: string
    state: string
    pinCode: string
    country: string
    adminName: string
    adminDesignation: string
    adminEmail: string
    adminPassword: string
    confirmPassword: string
    adminMobile: string
    studentStrength: string
    teachingStaff: string
    nonTeachingStaff: string
    totalClasses: string
    mediumOfInstruction?: SchoolCreatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolCreatestreamsOfferedInput | string[]
    plan: string
    billingCycle: string
    termsAccepted: boolean
    privacyAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentCreateNestedManyWithoutSchoolInput
    parents?: ParentCreateNestedManyWithoutSchoolInput
    feeStructures?: FeeStructureCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutRoutesInput = {
    id?: string
    schoolName: string
    schoolType: string
    boardAffiliation: string
    establishmentYear: string
    schoolCode: string
    udiseCode?: string | null
    schoolCategory: string
    officialEmail: string
    landlineNumber?: string | null
    mobileNumber: string
    alternativeMobile?: string | null
    website?: string | null
    schoolAddress: string
    city: string
    state: string
    pinCode: string
    country: string
    adminName: string
    adminDesignation: string
    adminEmail: string
    adminPassword: string
    confirmPassword: string
    adminMobile: string
    studentStrength: string
    teachingStaff: string
    nonTeachingStaff: string
    totalClasses: string
    mediumOfInstruction?: SchoolCreatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolCreatestreamsOfferedInput | string[]
    plan: string
    billingCycle: string
    termsAccepted: boolean
    privacyAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutSchoolInput
    parents?: ParentUncheckedCreateNestedManyWithoutSchoolInput
    feeStructures?: FeeStructureUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutRoutesInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutRoutesInput, SchoolUncheckedCreateWithoutRoutesInput>
  }

  export type StudentCreateWithoutRouteInput = {
    id?: string
    studentId: string
    admissionNumber: string
    qrCodeValue: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth: Date | string
    gender: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    photoUrl?: string | null
    parentPrimaryMobile: string
    parentAlternateMobile?: string | null
    parentEmail?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    admissionDate: Date | string
    previousSchoolId?: string | null
    usesTransport?: boolean
    pickupPoint?: string | null
    dropPoint?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutStudentsInput
    parent: ParentCreateNestedOneWithoutStudentsInput
    academicHistory?: StudentAcademicHistoryCreateNestedManyWithoutStudentInput
    documents?: DocumentCreateNestedManyWithoutStudentInput
    studentFees?: StudentFeeCreateNestedManyWithoutStudentInput
    feePayments?: FeePaymentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutRouteInput = {
    id?: string
    studentId: string
    admissionNumber: string
    qrCodeValue: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth: Date | string
    gender: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    photoUrl?: string | null
    parentPrimaryMobile: string
    parentAlternateMobile?: string | null
    parentEmail?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    admissionDate: Date | string
    previousSchoolId?: string | null
    usesTransport?: boolean
    pickupPoint?: string | null
    dropPoint?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
    parentId: string
    academicHistory?: StudentAcademicHistoryUncheckedCreateNestedManyWithoutStudentInput
    documents?: DocumentUncheckedCreateNestedManyWithoutStudentInput
    studentFees?: StudentFeeUncheckedCreateNestedManyWithoutStudentInput
    feePayments?: FeePaymentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutRouteInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutRouteInput, StudentUncheckedCreateWithoutRouteInput>
  }

  export type StudentCreateManyRouteInputEnvelope = {
    data: StudentCreateManyRouteInput | StudentCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type SchoolUpsertWithoutRoutesInput = {
    update: XOR<SchoolUpdateWithoutRoutesInput, SchoolUncheckedUpdateWithoutRoutesInput>
    create: XOR<SchoolCreateWithoutRoutesInput, SchoolUncheckedCreateWithoutRoutesInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutRoutesInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutRoutesInput, SchoolUncheckedUpdateWithoutRoutesInput>
  }

  export type SchoolUpdateWithoutRoutesInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolType?: StringFieldUpdateOperationsInput | string
    boardAffiliation?: StringFieldUpdateOperationsInput | string
    establishmentYear?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    schoolCategory?: StringFieldUpdateOperationsInput | string
    officialEmail?: StringFieldUpdateOperationsInput | string
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: StringFieldUpdateOperationsInput | string
    alternativeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    schoolAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    adminName?: StringFieldUpdateOperationsInput | string
    adminDesignation?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    confirmPassword?: StringFieldUpdateOperationsInput | string
    adminMobile?: StringFieldUpdateOperationsInput | string
    studentStrength?: StringFieldUpdateOperationsInput | string
    teachingStaff?: StringFieldUpdateOperationsInput | string
    nonTeachingStaff?: StringFieldUpdateOperationsInput | string
    totalClasses?: StringFieldUpdateOperationsInput | string
    mediumOfInstruction?: SchoolUpdatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolUpdatestreamsOfferedInput | string[]
    plan?: StringFieldUpdateOperationsInput | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    termsAccepted?: BoolFieldUpdateOperationsInput | boolean
    privacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutSchoolNestedInput
    parents?: ParentUpdateManyWithoutSchoolNestedInput
    feeStructures?: FeeStructureUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutRoutesInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolType?: StringFieldUpdateOperationsInput | string
    boardAffiliation?: StringFieldUpdateOperationsInput | string
    establishmentYear?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    schoolCategory?: StringFieldUpdateOperationsInput | string
    officialEmail?: StringFieldUpdateOperationsInput | string
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: StringFieldUpdateOperationsInput | string
    alternativeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    schoolAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    adminName?: StringFieldUpdateOperationsInput | string
    adminDesignation?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    confirmPassword?: StringFieldUpdateOperationsInput | string
    adminMobile?: StringFieldUpdateOperationsInput | string
    studentStrength?: StringFieldUpdateOperationsInput | string
    teachingStaff?: StringFieldUpdateOperationsInput | string
    nonTeachingStaff?: StringFieldUpdateOperationsInput | string
    totalClasses?: StringFieldUpdateOperationsInput | string
    mediumOfInstruction?: SchoolUpdatemediumOfInstructionInput | string[]
    streamsOffered?: SchoolUpdatestreamsOfferedInput | string[]
    plan?: StringFieldUpdateOperationsInput | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    termsAccepted?: BoolFieldUpdateOperationsInput | boolean
    privacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutSchoolNestedInput
    parents?: ParentUncheckedUpdateManyWithoutSchoolNestedInput
    feeStructures?: FeeStructureUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type StudentUpsertWithWhereUniqueWithoutRouteInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutRouteInput, StudentUncheckedUpdateWithoutRouteInput>
    create: XOR<StudentCreateWithoutRouteInput, StudentUncheckedCreateWithoutRouteInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutRouteInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutRouteInput, StudentUncheckedUpdateWithoutRouteInput>
  }

  export type StudentUpdateManyWithWhereWithoutRouteInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutRouteInput>
  }

  export type StudentCreateManySchoolInput = {
    id?: string
    studentId: string
    admissionNumber: string
    qrCodeValue: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth: Date | string
    gender: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    photoUrl?: string | null
    parentPrimaryMobile: string
    parentAlternateMobile?: string | null
    parentEmail?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    admissionDate: Date | string
    previousSchoolId?: string | null
    usesTransport?: boolean
    transportRouteId?: string | null
    pickupPoint?: string | null
    dropPoint?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId: string
  }

  export type ParentCreateManySchoolInput = {
    id?: string
    fatherName: string
    fatherOccupation?: string | null
    fatherMobile: string
    fatherEmail?: string | null
    fatherAadhar?: string | null
    motherName: string
    motherOccupation?: string | null
    motherMobile: string
    motherEmail?: string | null
    motherAadhar?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    guardianMobile?: string | null
    guardianEmail?: string | null
    primaryContact?: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeeStructureCreateManySchoolInput = {
    id?: string
    class: string
    academicYear: string
    tuitionFeeMonthly: number
    transportFeeMonthly?: number
    examFeeYearly?: number
    admissionFee?: number
    booksFee?: number
    idCardFee?: number
    activityFee?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteCreateManySchoolInput = {
    id?: string
    routeName: string
    stops?: RouteCreatestopsInput | string[]
    vehicleNumber: string
    driverName: string
    driverMobile: string
    capacity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    qrCodeValue?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentPrimaryMobile?: StringFieldUpdateOperationsInput | string
    parentAlternateMobile?: NullableStringFieldUpdateOperationsInput | string | null
    parentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchoolId?: NullableStringFieldUpdateOperationsInput | string | null
    usesTransport?: BoolFieldUpdateOperationsInput | boolean
    pickupPoint?: NullableStringFieldUpdateOperationsInput | string | null
    dropPoint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: ParentUpdateOneRequiredWithoutStudentsNestedInput
    route?: RouteUpdateOneWithoutStudentsNestedInput
    academicHistory?: StudentAcademicHistoryUpdateManyWithoutStudentNestedInput
    documents?: DocumentUpdateManyWithoutStudentNestedInput
    studentFees?: StudentFeeUpdateManyWithoutStudentNestedInput
    feePayments?: FeePaymentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    qrCodeValue?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentPrimaryMobile?: StringFieldUpdateOperationsInput | string
    parentAlternateMobile?: NullableStringFieldUpdateOperationsInput | string | null
    parentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchoolId?: NullableStringFieldUpdateOperationsInput | string | null
    usesTransport?: BoolFieldUpdateOperationsInput | boolean
    transportRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    pickupPoint?: NullableStringFieldUpdateOperationsInput | string | null
    dropPoint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: StringFieldUpdateOperationsInput | string
    academicHistory?: StudentAcademicHistoryUncheckedUpdateManyWithoutStudentNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutStudentNestedInput
    studentFees?: StudentFeeUncheckedUpdateManyWithoutStudentNestedInput
    feePayments?: FeePaymentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    qrCodeValue?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentPrimaryMobile?: StringFieldUpdateOperationsInput | string
    parentAlternateMobile?: NullableStringFieldUpdateOperationsInput | string | null
    parentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchoolId?: NullableStringFieldUpdateOperationsInput | string | null
    usesTransport?: BoolFieldUpdateOperationsInput | boolean
    transportRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    pickupPoint?: NullableStringFieldUpdateOperationsInput | string | null
    dropPoint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: StringFieldUpdateOperationsInput | string
  }

  export type ParentUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    fatherMobile?: StringFieldUpdateOperationsInput | string
    fatherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fatherAadhar?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: StringFieldUpdateOperationsInput | string
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherMobile?: StringFieldUpdateOperationsInput | string
    motherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    motherAadhar?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    guardianMobile?: NullableStringFieldUpdateOperationsInput | string | null
    guardianEmail?: NullableStringFieldUpdateOperationsInput | string | null
    primaryContact?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    fatherMobile?: StringFieldUpdateOperationsInput | string
    fatherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fatherAadhar?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: StringFieldUpdateOperationsInput | string
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherMobile?: StringFieldUpdateOperationsInput | string
    motherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    motherAadhar?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    guardianMobile?: NullableStringFieldUpdateOperationsInput | string | null
    guardianEmail?: NullableStringFieldUpdateOperationsInput | string | null
    primaryContact?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    fatherMobile?: StringFieldUpdateOperationsInput | string
    fatherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fatherAadhar?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: StringFieldUpdateOperationsInput | string
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherMobile?: StringFieldUpdateOperationsInput | string
    motherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    motherAadhar?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    guardianMobile?: NullableStringFieldUpdateOperationsInput | string | null
    guardianEmail?: NullableStringFieldUpdateOperationsInput | string | null
    primaryContact?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeStructureUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    tuitionFeeMonthly?: IntFieldUpdateOperationsInput | number
    transportFeeMonthly?: IntFieldUpdateOperationsInput | number
    examFeeYearly?: IntFieldUpdateOperationsInput | number
    admissionFee?: IntFieldUpdateOperationsInput | number
    booksFee?: IntFieldUpdateOperationsInput | number
    idCardFee?: IntFieldUpdateOperationsInput | number
    activityFee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeStructureUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    tuitionFeeMonthly?: IntFieldUpdateOperationsInput | number
    transportFeeMonthly?: IntFieldUpdateOperationsInput | number
    examFeeYearly?: IntFieldUpdateOperationsInput | number
    admissionFee?: IntFieldUpdateOperationsInput | number
    booksFee?: IntFieldUpdateOperationsInput | number
    idCardFee?: IntFieldUpdateOperationsInput | number
    activityFee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeStructureUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    tuitionFeeMonthly?: IntFieldUpdateOperationsInput | number
    transportFeeMonthly?: IntFieldUpdateOperationsInput | number
    examFeeYearly?: IntFieldUpdateOperationsInput | number
    admissionFee?: IntFieldUpdateOperationsInput | number
    booksFee?: IntFieldUpdateOperationsInput | number
    idCardFee?: IntFieldUpdateOperationsInput | number
    activityFee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    stops?: RouteUpdatestopsInput | string[]
    vehicleNumber?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    driverMobile?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    stops?: RouteUpdatestopsInput | string[]
    vehicleNumber?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    driverMobile?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    stops?: RouteUpdatestopsInput | string[]
    vehicleNumber?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    driverMobile?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAcademicHistoryCreateManyStudentInput = {
    id?: string
    academicYear: string
    class: string
    section: string
    rollNumber: number
    classTeacher?: string | null
    promotionStatus?: string
    attendancePresent?: number
    attendanceAbsent?: number
    finalGrade?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateManyStudentInput = {
    id?: string
    documentType: string
    documentUrl: string
    fileName: string
    fileSize: number
    mimeType: string
    verificationStatus?: string
    verifiedBy?: string | null
    verifiedAt?: Date | string | null
    rejectionReason?: string | null
    uploadedAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentFeeCreateManyStudentInput = {
    id?: string
    academicYear: string
    tuitionFee: number
    transportFee?: number
    examFee?: number
    admissionFee?: number
    otherFees?: number
    discountPercentage?: number
    discountAmount?: number
    specialCharges?: number
    totalFee: number
    totalPayable: number
    totalPaid?: number
    totalPending: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeePaymentCreateManyStudentInput = {
    id?: string
    amountPaid: number
    paymentDate?: Date | string
    paymentMethod: string
    transactionId?: string | null
    receiptNumber: string
    paymentFor: string
    remarks?: string | null
    paidBy?: string | null
    createdAt?: Date | string
    installmentId?: string | null
  }

  export type StudentAcademicHistoryUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    rollNumber?: IntFieldUpdateOperationsInput | number
    classTeacher?: NullableStringFieldUpdateOperationsInput | string | null
    promotionStatus?: StringFieldUpdateOperationsInput | string
    attendancePresent?: IntFieldUpdateOperationsInput | number
    attendanceAbsent?: IntFieldUpdateOperationsInput | number
    finalGrade?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAcademicHistoryUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    rollNumber?: IntFieldUpdateOperationsInput | number
    classTeacher?: NullableStringFieldUpdateOperationsInput | string | null
    promotionStatus?: StringFieldUpdateOperationsInput | string
    attendancePresent?: IntFieldUpdateOperationsInput | number
    attendanceAbsent?: IntFieldUpdateOperationsInput | number
    finalGrade?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAcademicHistoryUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    rollNumber?: IntFieldUpdateOperationsInput | number
    classTeacher?: NullableStringFieldUpdateOperationsInput | string | null
    promotionStatus?: StringFieldUpdateOperationsInput | string
    attendancePresent?: IntFieldUpdateOperationsInput | number
    attendanceAbsent?: IntFieldUpdateOperationsInput | number
    finalGrade?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentFeeUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    tuitionFee?: IntFieldUpdateOperationsInput | number
    transportFee?: IntFieldUpdateOperationsInput | number
    examFee?: IntFieldUpdateOperationsInput | number
    admissionFee?: IntFieldUpdateOperationsInput | number
    otherFees?: IntFieldUpdateOperationsInput | number
    discountPercentage?: IntFieldUpdateOperationsInput | number
    discountAmount?: IntFieldUpdateOperationsInput | number
    specialCharges?: IntFieldUpdateOperationsInput | number
    totalFee?: IntFieldUpdateOperationsInput | number
    totalPayable?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    totalPending?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    installments?: FeeInstallmentUpdateManyWithoutStudentFeeNestedInput
  }

  export type StudentFeeUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    tuitionFee?: IntFieldUpdateOperationsInput | number
    transportFee?: IntFieldUpdateOperationsInput | number
    examFee?: IntFieldUpdateOperationsInput | number
    admissionFee?: IntFieldUpdateOperationsInput | number
    otherFees?: IntFieldUpdateOperationsInput | number
    discountPercentage?: IntFieldUpdateOperationsInput | number
    discountAmount?: IntFieldUpdateOperationsInput | number
    specialCharges?: IntFieldUpdateOperationsInput | number
    totalFee?: IntFieldUpdateOperationsInput | number
    totalPayable?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    totalPending?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    installments?: FeeInstallmentUncheckedUpdateManyWithoutStudentFeeNestedInput
  }

  export type StudentFeeUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    tuitionFee?: IntFieldUpdateOperationsInput | number
    transportFee?: IntFieldUpdateOperationsInput | number
    examFee?: IntFieldUpdateOperationsInput | number
    admissionFee?: IntFieldUpdateOperationsInput | number
    otherFees?: IntFieldUpdateOperationsInput | number
    discountPercentage?: IntFieldUpdateOperationsInput | number
    discountAmount?: IntFieldUpdateOperationsInput | number
    specialCharges?: IntFieldUpdateOperationsInput | number
    totalFee?: IntFieldUpdateOperationsInput | number
    totalPayable?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    totalPending?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeePaymentUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaid?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNumber?: StringFieldUpdateOperationsInput | string
    paymentFor?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    paidBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    installment?: FeeInstallmentUpdateOneWithoutPaymentsNestedInput
  }

  export type FeePaymentUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaid?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNumber?: StringFieldUpdateOperationsInput | string
    paymentFor?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    paidBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    installmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeePaymentUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaid?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNumber?: StringFieldUpdateOperationsInput | string
    paymentFor?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    paidBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    installmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentCreateManyParentInput = {
    id?: string
    studentId: string
    admissionNumber: string
    qrCodeValue: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth: Date | string
    gender: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    photoUrl?: string | null
    parentPrimaryMobile: string
    parentAlternateMobile?: string | null
    parentEmail?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    admissionDate: Date | string
    previousSchoolId?: string | null
    usesTransport?: boolean
    transportRouteId?: string | null
    pickupPoint?: string | null
    dropPoint?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
  }

  export type StudentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    qrCodeValue?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentPrimaryMobile?: StringFieldUpdateOperationsInput | string
    parentAlternateMobile?: NullableStringFieldUpdateOperationsInput | string | null
    parentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchoolId?: NullableStringFieldUpdateOperationsInput | string | null
    usesTransport?: BoolFieldUpdateOperationsInput | boolean
    pickupPoint?: NullableStringFieldUpdateOperationsInput | string | null
    dropPoint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutStudentsNestedInput
    route?: RouteUpdateOneWithoutStudentsNestedInput
    academicHistory?: StudentAcademicHistoryUpdateManyWithoutStudentNestedInput
    documents?: DocumentUpdateManyWithoutStudentNestedInput
    studentFees?: StudentFeeUpdateManyWithoutStudentNestedInput
    feePayments?: FeePaymentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    qrCodeValue?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentPrimaryMobile?: StringFieldUpdateOperationsInput | string
    parentAlternateMobile?: NullableStringFieldUpdateOperationsInput | string | null
    parentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchoolId?: NullableStringFieldUpdateOperationsInput | string | null
    usesTransport?: BoolFieldUpdateOperationsInput | boolean
    transportRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    pickupPoint?: NullableStringFieldUpdateOperationsInput | string | null
    dropPoint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    academicHistory?: StudentAcademicHistoryUncheckedUpdateManyWithoutStudentNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutStudentNestedInput
    studentFees?: StudentFeeUncheckedUpdateManyWithoutStudentNestedInput
    feePayments?: FeePaymentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    qrCodeValue?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentPrimaryMobile?: StringFieldUpdateOperationsInput | string
    parentAlternateMobile?: NullableStringFieldUpdateOperationsInput | string | null
    parentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchoolId?: NullableStringFieldUpdateOperationsInput | string | null
    usesTransport?: BoolFieldUpdateOperationsInput | boolean
    transportRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    pickupPoint?: NullableStringFieldUpdateOperationsInput | string | null
    dropPoint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type FeeInstallmentCreateManyStudentFeeInput = {
    id?: string
    installmentNumber: number
    month: string
    dueDate: Date | string
    amountDue: number
    amountPaid?: number
    lateFee?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeeInstallmentUpdateWithoutStudentFeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    installmentNumber?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amountDue?: IntFieldUpdateOperationsInput | number
    amountPaid?: IntFieldUpdateOperationsInput | number
    lateFee?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: FeePaymentUpdateManyWithoutInstallmentNestedInput
  }

  export type FeeInstallmentUncheckedUpdateWithoutStudentFeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    installmentNumber?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amountDue?: IntFieldUpdateOperationsInput | number
    amountPaid?: IntFieldUpdateOperationsInput | number
    lateFee?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: FeePaymentUncheckedUpdateManyWithoutInstallmentNestedInput
  }

  export type FeeInstallmentUncheckedUpdateManyWithoutStudentFeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    installmentNumber?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amountDue?: IntFieldUpdateOperationsInput | number
    amountPaid?: IntFieldUpdateOperationsInput | number
    lateFee?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeePaymentCreateManyInstallmentInput = {
    id?: string
    amountPaid: number
    paymentDate?: Date | string
    paymentMethod: string
    transactionId?: string | null
    receiptNumber: string
    paymentFor: string
    remarks?: string | null
    paidBy?: string | null
    createdAt?: Date | string
    studentId: string
  }

  export type FeePaymentUpdateWithoutInstallmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaid?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNumber?: StringFieldUpdateOperationsInput | string
    paymentFor?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    paidBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutFeePaymentsNestedInput
  }

  export type FeePaymentUncheckedUpdateWithoutInstallmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaid?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNumber?: StringFieldUpdateOperationsInput | string
    paymentFor?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    paidBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type FeePaymentUncheckedUpdateManyWithoutInstallmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaid?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNumber?: StringFieldUpdateOperationsInput | string
    paymentFor?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    paidBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateManyRouteInput = {
    id?: string
    studentId: string
    admissionNumber: string
    qrCodeValue: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth: Date | string
    gender: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    photoUrl?: string | null
    parentPrimaryMobile: string
    parentAlternateMobile?: string | null
    parentEmail?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    pinCode: string
    country?: string
    admissionDate: Date | string
    previousSchoolId?: string | null
    usesTransport?: boolean
    pickupPoint?: string | null
    dropPoint?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
    parentId: string
  }

  export type StudentUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    qrCodeValue?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentPrimaryMobile?: StringFieldUpdateOperationsInput | string
    parentAlternateMobile?: NullableStringFieldUpdateOperationsInput | string | null
    parentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchoolId?: NullableStringFieldUpdateOperationsInput | string | null
    usesTransport?: BoolFieldUpdateOperationsInput | boolean
    pickupPoint?: NullableStringFieldUpdateOperationsInput | string | null
    dropPoint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutStudentsNestedInput
    parent?: ParentUpdateOneRequiredWithoutStudentsNestedInput
    academicHistory?: StudentAcademicHistoryUpdateManyWithoutStudentNestedInput
    documents?: DocumentUpdateManyWithoutStudentNestedInput
    studentFees?: StudentFeeUpdateManyWithoutStudentNestedInput
    feePayments?: FeePaymentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    qrCodeValue?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentPrimaryMobile?: StringFieldUpdateOperationsInput | string
    parentAlternateMobile?: NullableStringFieldUpdateOperationsInput | string | null
    parentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchoolId?: NullableStringFieldUpdateOperationsInput | string | null
    usesTransport?: BoolFieldUpdateOperationsInput | boolean
    pickupPoint?: NullableStringFieldUpdateOperationsInput | string | null
    dropPoint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    academicHistory?: StudentAcademicHistoryUncheckedUpdateManyWithoutStudentNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutStudentNestedInput
    studentFees?: StudentFeeUncheckedUpdateManyWithoutStudentNestedInput
    feePayments?: FeePaymentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    qrCodeValue?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentPrimaryMobile?: StringFieldUpdateOperationsInput | string
    parentAlternateMobile?: NullableStringFieldUpdateOperationsInput | string | null
    parentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchoolId?: NullableStringFieldUpdateOperationsInput | string | null
    usesTransport?: BoolFieldUpdateOperationsInput | boolean
    pickupPoint?: NullableStringFieldUpdateOperationsInput | string | null
    dropPoint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}