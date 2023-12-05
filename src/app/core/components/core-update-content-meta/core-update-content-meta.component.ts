import {BaseComponent} from '@core/components/base.component';
import {Component, Injector, Input} from '@angular/core';
import {MetaConstants} from "@core/core.constants";
import {Meta, MetaDefinition, Title} from "@angular/platform-browser";


@Component({
    selector: 'core-update-content-meta',
    templateUrl: './core-update-content-meta.component.html',
    styleUrls: ['./core-update-content-meta.component.scss']
})
export class CoreUpdateContentMetaComponent extends BaseComponent {

    @Input()
    title: string;
    @Input()
    description: string;
    @Input()
    type: string;
    @Input()
    url: string;
    @Input()
    keywords: string[] = [];
    @Input()
    image: string;
    @Input()
    imageWidth: number;
    @Input()
    imageHeight: number;


    protected metaService: Meta;
    protected titleService: Title;

    constructor(injector: Injector) {
        super(injector);
        this.metaService = injector.get(Meta);
        this.titleService = injector.get(Title);
    }

    initializeComponent() {
        this.buildMeta();
    }

    getMetaDefinition(name?: string, content?: string): MetaDefinition {
        return {property: name, content};
    }

    setMetaTitle(title: string): void {
        this.titleService.setTitle(title);
        this.metaService.updateTag(this.getMetaDefinition('title', title), "property='title'");
        this.metaService.updateTag(this.getMetaDefinition('og:title', title), "property='og:title'");
    }

    setMetaDescription(description: string): void {
        this.metaService.updateTag(this.getMetaDefinition('og:description', description), "property='og:description'");
        this.metaService.updateTag(this.getMetaDefinition('description', description), "property='description'");
    }

    setMetaType(type: string): void {
        this.metaService.updateTag(this.getMetaDefinition('type', type), "property='type'");
        this.metaService.updateTag(this.getMetaDefinition('og:type', type), "property='og:type'");
    }

    setUrl(url: string): void {
        this.metaService.updateTag(this.getMetaDefinition('og:url', url), "property='og:url'");
    }

    setImage(image_url: string): void {
        this.metaService.updateTag(this.getMetaDefinition('og:image', image_url), "property='og:image'");
        this.metaService.updateTag(this.getMetaDefinition('og:image:url', image_url), "property='og:image:url'");
        this.metaService.updateTag(this.getMetaDefinition('og:image:secure_url', image_url),
            "property='og:image:secure_url'");
        this.metaService.updateTag(this.getMetaDefinition('og:image:type', "image/png"))
    }

    setKeywords(keywords: string[]): void {
        // this.metaService.setTag('keywords', keywords.join(','));
    }

    setImageWidth(width: number) {
        this.metaService.updateTag(this.getMetaDefinition('og:image:width', '' + width), "property='og:image:width'");
    }

    setImageHeight(height: number) {
        this.metaService.updateTag(this.getMetaDefinition('og:image:height', '' + height),
            "property='og:image:height'");
    }

    buildMeta(title?: string, description?: string, type?: string, url?: string, image?: string,
              keywords?: string[], height?: number, width?: number): void {
        this.setMetaTitle(title || this.title || MetaConstants.DEFAULT_TITLE);
        this.setMetaDescription(description || this.description || MetaConstants.DEFAULT_DESCRIPTION);
        this.setMetaType(type || this.type || MetaConstants.DEFAULT_TYPE);
        this.setUrl(url || this.url || MetaConstants.WEBSITE_URL);
        this.setKeywords(keywords || this.keywords);
        this.setImage(image || this.image || MetaConstants.DEFAULT_IMAGE);
        this.setImageHeight(height || this.imageHeight);
        this.setImageWidth(width || this.imageWidth);
    }
}

@Component({
    selector: 'core-update-content-meta-no-template',
    templateUrl: './core-update-content-meta-no-template.component.html',
    styleUrls: ['./core-update-content-meta.component.scss']
})
export class CoreUpdateContentMetaNoTemplateComponent extends CoreUpdateContentMetaComponent {
}
