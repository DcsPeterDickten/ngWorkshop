import { filter, map, reduce } from 'rxjs/operators';
import { range } from 'rxjs';

function onlyEven(x: number): boolean {
    return x % 2 === 0;
}
export function testObservables(limit: number): void {
    const source$ = range(0, limit); // 0,1,2,3,4,5,6,7,8,9
    const filterOnlyEvens = filter(onlyEven); // 0,2,4,6,8
    const multBy = (x: number) => map((value: number) => value * x); // 0*x, 2*x, 4*x, 6*x, 8*x
    const sum = reduce((acc, next: number) => acc + next, 0); //  0*x + 2*x + 4*x + 6*x + 8*x = 20*x

    source$
        .pipe(
            filterOnlyEvens,
            multBy(2)
        )
        .subscribe(console.log);

    source$
        .pipe(
            filterOnlyEvens,
            multBy(2),
            sum
        )
        .subscribe(console.log);
}