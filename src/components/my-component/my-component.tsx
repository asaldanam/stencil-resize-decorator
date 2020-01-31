import { Component, h, Host } from '@stencil/core';
import { ElementSizeListener } from '../../decorators/elementSize';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})

export class MyComponent {

  prop: string = 'asdfasd'

  @ElementSizeListener()

  componentWillLoad() {

  }

  componentDidLoad() {
  }


  componentDidUnload() {
  }

  render() {
    return (
      <Host>
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
        <div class="c-card rounded shadow-lg bg-white">
          
          <img class="c-image" src="https://source.unsplash.com/random/300x300" alt="Sunset in the mountains" />

          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="c-text text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>

        </div>
      </Host>
    );
  }
}
