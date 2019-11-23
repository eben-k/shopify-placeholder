import { Layout, Page, EmptyState } from '@shopify/polaris';
import { TitleBar, ResourcePicker } from '@shopify/app-bridge-react';
import store from 'store-js';
import ResourceListWithProducts from '../components/ResourceList';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {
    state = { open: false };
    render () {
        const emptyState = !store.get('ids');
        const { open } = this.state;
        return (
            <Page>
                <TitleBar 
                primaryAction={{
                    content: 'Select products',
                    onAction: () => this.setState({ open: true }),
                }}
                />
                <ResourcePicker 
                 resourceType="Product"
                 showVariants={false}
                 open={open}
                 onSelection={(resources) => this.handleSelection(resources)}
                 onCancel={() => this.setState({ open: false })}
                />
                {emptyState ? (
                    <Layout>
                        <EmptyState 
                        heading="Discount your products temporarily"
                        action={{
                            content: 'Select products',
                            onAction: () => this.setState({ open: true }),
                        }}
                        image={img}
                        >
                            <p>Select products to change their price temporarily.</p>
                        </EmptyState>
                    </Layout>
                ) : (
                    <ResourceListWithProducts />
                )}
            </Page>
        );
    }

    handleSelection = (resources) => {
        const idsFromResources = resources.selection.map((product) => product.id);
        this.setState({ open: false })
        store.set('ids', idsFromResources);
    };
}


export default Index;