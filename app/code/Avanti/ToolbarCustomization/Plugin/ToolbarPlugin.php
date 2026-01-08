<?php

declare(strict_types=1);

namespace Vendor\ToolbarCustomization\Plugin;

use Magento\Catalog\Block\Product\ProductList\Toolbar;

class ToolbarPlugin
{
    public function afterGetAvailableOrders(
        Toolbar $subject,
        array   $orders
    ): array
    {
        return [
            'price' => __('Price'),
            'name' => __('Name')
        ];
    }
}
