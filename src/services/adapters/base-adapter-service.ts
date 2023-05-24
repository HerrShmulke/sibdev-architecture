export interface IBaseAdapterService<I, O> {
  getData(data: I): O;
}
