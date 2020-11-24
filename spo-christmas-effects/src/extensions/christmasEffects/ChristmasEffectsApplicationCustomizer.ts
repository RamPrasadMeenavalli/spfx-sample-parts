import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer, PlaceholderContent, PlaceholderName
} from '@microsoft/sp-application-base';
import * as strings from 'ChristmasEffectsApplicationCustomizerStrings';

import * as React from "react";
import * as ReactDOM from "react-dom";
import { IEffectsManagerProps, EffectsManager } from './components/EffectsManager/EffectsManager';

const LOG_SOURCE: string = 'ChristmasEffectsApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IChristmasEffectsApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class ChristmasEffectsApplicationCustomizer
  extends BaseApplicationCustomizer<IChristmasEffectsApplicationCustomizerProperties> {

    private topPlaceholder: PlaceholderContent | undefined;

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    this.context.placeholderProvider.changedEvent.add(
      this,
      this.renderPlaceHolders
    );
      this.context.application.navigatedEvent.add(
      this,
      this.renderPlaceHolders
    );

    return Promise.resolve();
  }

  @override
  public onDispose(): Promise<void> {
    this.context.placeholderProvider.changedEvent.remove(
      this,
      this.renderPlaceHolders
    );
    this.context.application.navigatedEvent.remove(
      this,
      this.renderPlaceHolders
    );
    return Promise.resolve();
  }

  private renderPlaceHolders(): void {
    console.debug(this.topPlaceholder);
    if (!this.topPlaceholder) {
      this.topPlaceholder = this.context.placeholderProvider.tryCreateContent(
        PlaceholderName.Bottom
      );
    }
    const element: React.ReactElement<IEffectsManagerProps> = React.createElement(EffectsManager);
    ReactDOM.render(element, this.topPlaceholder.domElement);
  }
}
