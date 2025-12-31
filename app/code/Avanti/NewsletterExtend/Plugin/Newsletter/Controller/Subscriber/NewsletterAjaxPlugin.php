<?php

namespace Avanti\NewsletterExtend\Plugin\Newsletter\Controller\Subscriber;

use Magento\Framework\Controller\Result\JsonFactory;
use Magento\Framework\Message\ManagerInterface;
use Magento\Framework\App\RequestInterface;

class NewsletterAjaxPlugin
{
    protected $resultJsonFactory;
    protected $messageManager;
    protected $request;

    public function __construct(
        JsonFactory $resultJsonFactory,
        ManagerInterface $messageManager,
        RequestInterface $request
    ) {
        $this->resultJsonFactory = $resultJsonFactory;
        $this->messageManager = $messageManager;
        $this->request = $request;
    }

    public function afterExecute($subject, $result)
    {
        if ($this->request->isXmlHttpRequest()) {
            $this->messageManager->getMessages(true);

            $resultJson = $this->resultJsonFactory->create();

            return $resultJson->setData([
                'success' => true,
                'message' => __('Thanks!.')
            ]);
        }

        return $result;
    }
}
