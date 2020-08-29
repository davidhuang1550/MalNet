/**
 * we require the view class because we want to make some customizations to the data that we have from our models.
 * This way we can decouple the logic between the view and the model.
 */
export class NavView {
    private _keys: string[];
    private _navItem: Map<string, string>;

    public constructor(keys: string[], navItem: Map<string, string>) {
        this._keys = keys;
        this._navItem = navItem;
    }

    get navItem(): Map<string, string> {
        return this._navItem;
    }

    set navItem(value: Map<string, string>) {
        this._navItem = value;
    }
    get keys(): string[] {
        return this._keys;
    }

    set keys(value: string[]) {
        this._keys = value;
    }
}
