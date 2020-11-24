import * as React from "react";
import { SnowFlakes } from "../SnowFlakes/SnowFlakes";
import { XMasTree } from "../XMasTree/XMasTree";
import {PnPClientStorage, dateAdd} from '@pnp/common';
const CACHE_KEY:string = "hasfkk8234kjlhasdftv356asdlktvwe7";
import Snowf from 'react-snowf';
import ButtonSnow from '../ButtonSnow/ButtonSnow';

export interface IEffectsManagerProps{
}

export interface IEffectsManagerState{
    snow:boolean;
    tree: boolean;
    buttonSnow: boolean;
}

export class EffectsManager extends React.Component<IEffectsManagerProps,IEffectsManagerState> {
  private _storage:PnPClientStorage;  
  constructor(props: IEffectsManagerProps) {
    super(props);
    this._storage = new PnPClientStorage();
    this.state = {
        snow:true,
        tree: false,
        buttonSnow: true,
    };
  }

  public render(): JSX.Element {
    const {snow, tree, buttonSnow} = this.state;
    return (
        <div>
            {snow && (
              <Snowf
                amount={100}
                size={5}
                speed={1.5}
                wind={0}
                color="#fff"
                opacity={1}
                swing={1}
                image={null}
                zIndex={null}
                resize={true}
              />
            )}
            {tree && (<XMasTree onClick={this._closeMessage}></XMasTree>)}
            {buttonSnow && (<ButtonSnow></ButtonSnow>)}
        </div>
    );
  }

  public componentDidMount(){
    this._storage.session.getOrPut(CACHE_KEY, ()=>{ return Promise.resolve(true); }, dateAdd(new Date(), 'year', 100)).then(tree => {
        this.setState({tree});
    });
  }

  private _closeMessage = () => {
      this.setState({
          tree: false
      });
      this._storage.session.put(CACHE_KEY, false, dateAdd(new Date(), 'year', 100));
  }
}
