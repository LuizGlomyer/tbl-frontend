import { Pipe, type PipeTransform } from '@angular/core';
import { mapMediaType } from '../../core/utils/mappings';

@Pipe({
  name: 'MediaType',
})
export class MediaTypePipe implements PipeTransform {
  transform(value: string): string {
    return mapMediaType(value);
  }
}
