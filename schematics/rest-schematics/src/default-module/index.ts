import {
    apply, chain, externalSchematic, MergeStrategy, mergeWith, move, Rule, SchematicContext, template, Tree, url
} from '@angular-devkit/schematics';
import {basename, normalize, strings} from "@angular-devkit/core";
import {dirname} from "path";


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function defaultModule(_options: any): Rule {
    return (_tree: Tree, _context: SchematicContext) => {
        _options.name = basename(_options.name);
        _options.path = normalize('/' + dirname((_options.path + '/' + _options.name)));

        const templateSource = apply(
            url('./files'), [
                template({
                    ..._options,
                    classify: strings.classify,
                    dasherize: strings.dasherize,
                    underscore:strings.underscore
                }),
                move(_options.path),
            ],
        );

        return chain([
            externalSchematic('@schematics/angular', 'module', _options),
            mergeWith(templateSource, MergeStrategy.Overwrite),
        ]);
    };
}
