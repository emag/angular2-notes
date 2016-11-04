import {Component, EventEmitter} from '@angular/core';
import {Product} from '../product/product.model';

/**
 * @ProductListComponent - A component for rendering all Product and
 * storing the currently selected Product
 */
@Component({
  selector: 'product-list',
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  /**
   * @input productList - the Product[] passed to us
   */
  productList: Product[];

  /**
   * @output onProductSelected - outputs the current
   *         Product whenever a new Product is selected
   */
  onProductSelected: EventEmitter<Product>;

  /**
   * @property currentProduct - local state containing
   *           the currently selected `Product`
   */
  currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}