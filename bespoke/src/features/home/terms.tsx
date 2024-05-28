import { Box, Container, Typography } from "@mui/material";

const Termsncontitions = () => {
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        textAlign="left"
        p={4}
        flexDirection="column"
      >
        <Box textAlign="left" width="100%">
          <Typography variant="h4" component="div" align="center" gutterBottom>
            TERMS AND CONDITIONS FOR SARTORIAL MASTERS
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            INTRODUCTION
          </Typography>
          <Typography paragraph>
            Welcome to Sartorial Masters, where we offer bespoke tailoring
            services to our valued customers. These terms and conditions outline
            the rules and regulations for the use of <b>[insert Website URL]</b>
            . By accessing this website, you accept these terms and conditions
            in full.
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            DEFINITIONS
          </Typography>
          <Typography paragraph>
            1. "We", "Us", "Our", or "Sartorial Masters" refers to the business
            providing tailoring services.
            <br />
            2. "You", "Your", "Customer", or "Client" refers to the person using
            our services and/or placing an order on this website.
            <br />
            3. “Item” or “Product” refers to anything purchased under this
            website.
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            PROCESS
          </Typography>
          <Typography paragraph>
            4. When placing an order on our website, you agree to provide
            accurate, complete, and current information about yourself as
            prompted by the order form.
            <br />
            5. Orders are considered final upon submission and cannot be changed
            after submission, unless informed to our online support team
            promptly.
            <br />
            6. We reserve the right to cancel any order for any reason, such as
            inability to fulfill the order, inaccuracies in product or pricing
            information, or suspicion of fraudulent activity.
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            MEASUREMENTS
          </Typography>
          <Typography paragraph>
            7. Customers are responsible for providing accurate measurements as
            per our provided guidelines.
            <br />
            8. We are not liable for any issues arising from inaccurate
            measurements provided by the customer. However, any fault on part of
            the measurements can be rectified as per the guidelines under our
            return policy.
            <br />
            9. Alterations due to measurement discrepancies may incur additional
            charges, which will be communicated to the customer before
            proceeding.
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            PAYMENT AND PRICING
          </Typography>
          <Typography paragraph>
            10. Payment for orders is required in full at the time of placing
            the order.
            <br />
            11. Prices are as stated on the website and are subject to change
            without notice. However, once an order is confirmed, the price is
            fixed.
            <br />
            12. The pricing as provided will be final and conclusive of the
            price of the suit excluding shipping charges and handling fees.
            <br />
            13. Under circumstances which render it necessary for a change in
            pricing, our team will contact the customer promptly and inform them
            of such a change.
            <br />
            14. The customer reserves the right to reject any such change
            mentioned in Section 13 and is entitled to a complete refund of the
            amount paid.
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            SHIPPING AND DELIVERY
          </Typography>
          <Typography paragraph>
            15. We aim to deliver orders within standard (10-15 days) and
            expedited shipping (3-6 days). However, this is an estimate and not
            a guarantee.
            <br />
            16. Shipping costs and delivery times may vary based on location.
            <br />
            17. Any customs duties or taxes incurred during shipping are the
            responsibility of the customer.
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            RETURN POLICY
          </Typography>
          <Typography paragraph>
            18. We take pride in our craftsmanship. Therefore, where a customer
            is not satisfied with an item, he is entitled to a free alteration
            of the item upon promptly informing the online support team.
            <br />
            19. Returns are subject to our discretion and must meet our return
            policy criteria, which can be found [Link to Return Policy].
            <br />
            20. Items must be returned in their original condition, unworn and
            unwashed. Any damage to the item will exclude the possibility of
            alterations.
            <br />
            21. Upon the customer's request, the support team will determine the
            fault of the item and decide as follows:
            <br />
            &emsp;a) Where the customer has incorrectly recorded his
            measurements, he will not be entitled to any free alteration.
            <br />
            &emsp;b) Where the customer is not at error, he is entitled to one
            free alteration to the item.
            <br />
            22. Where the item mentioned in Section 21(a) is unalterable, the
            customer will be entitled to a redone suit at no additional cost.
            <br />
            23. Items returned under Sections 21(a) and 22 are not inclusive of
            shipping costs and other charges.
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            INTELLECTUAL PROPERTY
          </Typography>
          <Typography paragraph>
            24. All content on this website, including but not limited to logos,
            images, designs, and text, are the intellectual property of
            Sartorial Masters.
            <br />
            25. You agree not to reproduce, distribute, modify, or create
            derivative works from any content on this website without our
            express written consent.
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            LIMITATION OF LIABILITY
          </Typography>
          <Typography paragraph>
            26. We will not be liable for any direct, indirect, incidental,
            special, or consequential damages arising from the use of our
            services or products.
            <br />
            27. Our total liability for any claim arising out of or relating to
            an order shall not exceed the total amount paid by you for that
            order.
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            CONTACT INFORMATION
          </Typography>
          <Typography paragraph>
            • If you wish to make any further inquiries into questions about
            these terms and conditions, please contact us at [Contact Email].
            <br />• By using our website and placing an order, you acknowledge
            that you have read, understood, and agree to these terms and
            conditions.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Termsncontitions;
